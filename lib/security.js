import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { ironSession } from "iron-session/express";

const checkSecurity = async () => {

  return "askl"
}

module.exports = {
  checkSecurity,
  // setOtp
}

// export const getServerSideProps = withIronSessionSsr(async function ({req, res, query}) {
//
//   var user = await req.session.user;
//
//   if (user && user.access_token) {
//
//     const check = await checker( user.access_token )
//     const resCheck = await JSON.parse(check)
//
//     if (resCheck.error) {
//
//       const refresh = await refreshToken( user.refresh_token )
//       const resRef = await JSON.parse(refresh)
//
//       if (resRef.error) {
//         await req.session.destroy();
//         return redirect("/")
//       }
//
//       if (resRef.data) {
//         user = { isLoggedIn: true, access_token: resRef.data.access_token, refresh_token: resRef.data.refresh_token };
//         req.session.user = user;
//         await req.session.save();
//         return redirect("/profile")
//       }
//
//     }
//
//     if (resCheck.data) {
//       return redirect("/profile")
//     }
//
//   }
//
//   if (query.slug.length < 3 ) {
//     return redirect("/")
//   }
//
//   const checkUids = await checkUid(query.slug[0])
//
//   if (checkUids.length < 1 || checkUids[0].phone !== query.slug[1] || checkUids[0].email !== query.slug[2] || checkUids[0].blocked) {
//     return redirect("/")
//   }
//
//   const checkWa = async (phone) => {
//     try {
//       const resx = await fetchJson(`${process.env.NODE_URL}check_wa`, {method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({type: 'node', uri: 'check_wa', phone: phone})})
//       return resx.status
//     } catch (error) {
//       return false
//     }
//   }
//
//   const wa = await checkWa(query.slug[1])
//
//   return {
//     props: {
//       wa: wa
//     },
//   }
//
// },sessionOptions);
