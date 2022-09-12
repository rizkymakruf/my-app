import React from "react";

const UseState = () => {
  const [menu, setMenu] = React.useState("makanan");

  const onClick = React.useCallback(
    (m) => () => {
      setMenu(m);
    },
    [menu]
  );

  return (
    <div className="w-fulll h-screen bg-gray-300 flex justify-center items-center">
      <div className="flex flex-row p-4 gap-x-4">
        <button
          onClick={onClick("makanan")}
          className={`py-2 px-4 rounded-full ${
            menu === "makanan" ? "bg-blue-500" : ""
          } duration-200 text-lg font-bold text-white`}
        >
          Makanan
        </button>
        <button
          onClick={onClick("minuman")}
          className={`py-2 px-4 rounded-full ${
            menu === "minuman" ? "bg-blue-500" : ""
          } duration-200 text-lg font-bold text-white`}
        >
          Minuman
        </button>
        <button
          onClick={onClick("beol")}
          className={`py-2 px-4 rounded-full ${
            menu === "beol" ? "bg-blue-500" : ""
          } duration-200 text-lg font-bold text-white`}
        >
          Beol
        </button>
        <button
          onClick={onClick("ppppp")}
          className={`py-2 px-4 rounded-full ${
            menu === "ppppp" ? "bg-blue-500" : ""
          } duration-200 text-lg font-bold text-white`}
        >
          ppppp
        </button>
      </div>
    </div>
  );
};

export default UseState;
