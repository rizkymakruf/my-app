import React from "react";

const Home = () => {
  const refer = React.useRef();

  React.useEffect(() => {
    console.log(refer.current.value);
  });

  return (
    <>
      <div className="w-full h-screen bg-gray-300 flex justify-center items-center gap-3">
        <input
          ref={refer}
          type={"text"}
          placeholder={"Type your text"}
          className={
            "px-3 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-300"
          }
        />
        <button
          onClick={() => console.log(refer.current.value)}
          className={
            "py-2 px-4 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full text-white font-bold"
          }
        >
          Get Value
        </button>
      </div>
      <div className="w-full h-screen bg-gradient-to-br from-blue-300 to-purple-700 flex justify-center items-center gap-3">
        <input
          ref={refer}
          type={"file"}
          className={"border-2 py-2 px-2 rounded-full bg-white"}
        />
        <button
          onClick={() => console.log(refer.current.files[0])}
          className={
            "py-3 px-6 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold"
          }
        >
          Get Value
        </button>
      </div>
    </>
  );
};
export default Home;
