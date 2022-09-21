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
    <div className="w-fulll h-screen bg-gray-400 flex flex-col justify-center items-center">
      <div className="flex flex-row p-4 gap-x-4 justify-center items-center w-full">
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
          onClick={onClick("others")}
          className={`py-2 px-4 rounded-full ${
            menu === "others" ? "bg-blue-500" : ""
          } duration-200 text-lg font-bold text-white`}
        >
          Others
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
      <div className="w-full flex justify-center items-center gap-2">
        {menu === "makanan" ? (
          <div className="w-full flex flex-col space-y-2 my-2 bg-white p-2">
            <div className="w-full flex gap-3">
              <div className="">
                <div className="w-32 h-32 bg-gray-400 rounded-lg"></div>
              </div>
              <div className="w-3/6 flex flex-col">
                <p className="text-md font-semibold text-black">
                  Raisin Delisght Frappee
                </p>
                <p className="text-gray-400 text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="w-1/6">Rp 50.000</div>
            </div>
          </div>
        ) : menu === "minuman" ? (
          <p className="text-lg">Minuman</p>
        ) : menu === "others" ? (
          <p className="text-lg">Others</p>
        ) : (
          <p className="text-lg">ppppp</p>
        )}
      </div>
    </div>
  );
};

export default UseState;
