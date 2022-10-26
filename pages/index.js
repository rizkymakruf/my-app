import Image from "next/image";
import FormLogin from "../components/form/formLogin";
import Rocket from "../public/Rocket.png";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
// import fetchJson, { FetchError } from "../lib/fetchJson";
import { GlobalContext } from "../context/global";
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "../lib/session";
import { checkUid } from "../lib/arangoDb";
import { redirect, retObject, checkerToken } from "../lib/listFunct";

// export const getServerSideProps = withIronSessionSsr(async function ({ req }) {
//   var user = await req.session.user;
//   if (!user || !user.access_token) {
//     return retObject({ isLogin: false });
//   }

//   const validationToken = await checkerToken(user);
//   if (validationToken.error) {
//     await req.session.destroy();
//     return redirect("/");
//   }

//   if (validationToken.status === "refresh") {
//     user = {
//       isLoggedIn: true,
//       access_token: validationToken.access_token,
//       refresh_token: validationToken.refresh_token,
//     };
//     req.session.user = user;
//     await req.session.save();
//   }

//   global.atob = require("atob");

//   const uid = JSON.parse(atob(user.access_token.split(".")[1]));
//   const checkUids = await checkUid(uid.user);

//   return retObject({
//     isLogin: true,
//   });
// }, sessionOptions);

export default function Home() {
  const router = useRouter();
  const { globalCtx, globalAct } = useContext(GlobalContext);
  useEffect(() => {
    globalAct.setIsFetch(false);
    globalAct.setErrorMsg("");
    router.prefetch("/config/dashboard");
  }, []);
  return (
    <>
      <div className="w-full h-screen bg-white p-5">
        {/* image */}
        <div className="w-full h-3/6 rounded-md flex justify-center items-center">
          <Image src={Rocket} priority />
        </div>
        {/* headline */}
        <div className="w-full h-1/6 relative">
          <div className="flex flex-col absolute bottom-2">
            <p className="text-5xl font-">Let's</p>
            <p className="text-5xl font-">Get started!</p>
          </div>
          {/* <div className="flex flex-col absolute bottom-2">
            <p className="text-5xl">You have</p>
            <p className="text-5xl">Logged in!</p>
          </div> */}
        </div>
        {/* <div className="w-full h-2/6 flex flex-col justify-center items-center">
          <button className="w-full rounded-full bg-gradient-to-r from-blue-500 to-red-400 py-3 flex justify-center items-center text-white font-bold text-lg ">
            Back to home
          </button>
          <div className="w-full flex justify-center items-center gap-1 pt-4">
            <div className="w-full">
              <hr />
            </div>
            <p>or</p>
            <div className="w-full">
              <hr />
            </div>
          </div>
          <div className="w-full flex justify-center items-center pb-2">
            <button>Logout?</button>
          </div>
        </div> */}
        <FormLogin
          // Default Form
          globalCtx={globalCtx}
          globalAct={globalAct}
          onSubmit={async function handleSubmit(e) {
            e.preventDefault();
            globalAct.setIsFetch(true);

            const body = {
              username: e.currentTarget.username.value,
              password: e.currentTarget.password.value,
              uri: "login",
            };

            try {
              const res = await fetchJson("/api/prot/post", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
              });
              router.push("/hooks/useState");
            } catch (error) {
              if (error instanceof FetchError) {
                globalAct.setErrorMsg(error.data.message);
              } else {
                globalAct.setErrorMsg("An unexpected error happened");
              }
            }

            globalAct.setIsFetch(false);
          }}
        />
      </div>
    </>
  );
}
