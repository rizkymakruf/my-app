import Image from "next/image";
import Rocket from "../public/Rocket.png";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen bg-white p-5">
        <div className="w-full h-3/6 rounded-md flex justify-center items-center">
          <Image src={Rocket} />
        </div>
        <div className="w-full h-1/6 relative">
          <div className="flex flex-col absolute bottom-2">
            <p className="text-5xl font-">Let's</p>
            <p className="text-5xl font-">Get started!</p>
          </div>
        </div>
        <div className="w-full h-2/6 flex flex-col space-y-3">
          <div className="w-full relative">
            <div className="absolute left-3 top-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-gray-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <input
              className="bg-gray-200 rounded-full w-full py-3 px-3 pl-10 focus:outline-none focus:ring-blue-300 focus:ring-2"
              placeholder="Username"
            ></input>
          </div>
          <div className="w-full relative">
            <div className="absolute left-3 top-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-gray-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </div>
            <input
              className="bg-gray-200 rounded-full w-full py-3 px-3 pl-10 focus:outline-none focus:ring-blue-300 focus:ring-2"
              placeholder="Password"
            ></input>
          </div>
          <div className="w-full pt-2">
            <button className="w-full rounded-full bg-gradient-to-r from-blue-500 to-red-400 py-3 flex justify-center items-center text-white font-bold text-lg">
              Login
            </button>
          </div>
          <div className="w-full flex justify-center items-center gap-1">
            <div className="w-full">
              <hr />
            </div>
            <p>or</p>
            <div className="w-full">
              <hr />
            </div>
          </div>
          <div className="w-full flex justify-center items-center pb-2">
            <button>Register?</button>
          </div>
        </div>
        <></>
      </div>
    </>
  );
}
