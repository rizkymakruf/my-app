export const sessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD,
  cookieName: "ski/sess",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production" ? true : false,
  },
};
// export const sessionOptions = {
//   password: "!}38imApW2)n#pBXP0rRrm.dE=dQ)6QE",
//   cookieName: "alacartebackoffice/sess",
//   cookieOptions: {
//     // secure: process.env.NODE_ENV === "production",
//     secure: process.env.NODE_ENV === "production" ? true : false,
//   },
// };
