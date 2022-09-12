import { useRouter } from "next/router";
import React from "react";

const UseEffect = () => {
  const refer = React.useRef();
  const route = useRouter();

  React.useEffect(() => {
    document.title = "Fandy";
    return () => (document.title = "Rizky");
  });

  return (
    <div className="w-full h-screen bg-gradient-to-tl from-yellow-400 to-green-500 flex justify-center items-center">
      <button
        className="rounded-full py-2 px-4 bg-orange-600 text-white font-bold text-xl"
        onClick={() => route.push("/hooks/useState")}
      >
        Route to hell 😈
      </button>
    </div>
  );
};
export default UseEffect;
