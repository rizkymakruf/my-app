import fetchJson, { FetchError } from "lib/fetchJson";

const searchInCtx = (nameKey, myArray) => {
  for (var i=0; i < myArray.length; i++) {
    if (myArray[i].name === nameKey) {
      return myArray[i];
    }
  }
}

const sendMsg = async (uid, sending, msg, phone, otp) => {
  const body = {type: 'node', uri: 'check_wa', uid: uid, sending: sending, msg: msg, dst: phone, otp: otp}
  try {
    const resx = await fetchJson(`${process.env.NODE_URL}send_msg`, {method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body)})
    return resx.status
  } catch (error) {
    return false
  }
}

const checkWa = async (phone) => {
  try {
    const resx = await fetchJson(`${process.env.NODE_URL}check_wa`, {method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({type: 'node', uri: 'check_wa', phone: phone})})
    return resx.status
  } catch (error) {
    return false
  }
}

const checkerToken = async (user) => {

  var data, result

  try {
    let resx = await fetchJson(`${process.env.SERVICE_URL}def/checker`, {
                  method: `GET`,
                  headers: { 'Content-Type': 'application/json', 'Authorization': 'Basic ' + user.access_token },
                 });
    data = {status: 'ok'}
  } catch (error) {
    data = {error: error.data}
  }

  if ( data.error ) {

    try {
      let refreshToken = await fetchJson(`${process.env.SERVICE_URL}refresh`, {
                          method: `POST`,
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({refresh_token: user.refresh_token}),
                         });

      data = {status: 'refresh', access_token: refreshToken.access_token, refresh_token: refreshToken.refresh_token}
    } catch (error) {
      data = {error: error.data}
    }

  }

  return data
}

const randomOtp = async (len) => {
  let result = await Math.floor(Math.random() * Math.pow(10, len));
  return (result.toString().length < len) ? await randomOtp(len) : result;
}

const retObject = (obj) => {
  return {
    props: obj
  };
}

const redirect = (to) => {
  return {
    redirect: {
      permanent: false,
      destination: to,
    },
    props:{},
  };
}

const cipher = salt => {
  const textToChars = text => text.split('').map(c => c.charCodeAt(0));
  const byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
  const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);

  return text => text.split('')
    .map(textToChars)
    .map(applySaltToChar)
    .map(byteHex)
    .join('');
}

const decipher = salt => {
  const textToChars = text => text.split('').map(c => c.charCodeAt(0));
  const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);
  return encoded => encoded.match(/.{1,2}/g)
    .map(hex => parseInt(hex, 16))
    .map(applySaltToChar)
    .map(charCode => String.fromCharCode(charCode))
    .join('');
}

module.exports = {
  searchInCtx,
  cipher,
  decipher,
  randomOtp,
  sendMsg,
  checkWa,
  checkerToken,
  retObject,
  redirect
}
