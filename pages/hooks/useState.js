import React from "react";

const UseState = () => {
  const [name, setName] = React.useState("fandy");
  const changeName = () => {
    if (name === "fandy") {
      setName("rizky");
    } else {
      setName("fandy");
    }
  };

  return (
    <div>
      <button onClick={changeName}>Pencet</button>
      {name}
    </div>
  );
};

export default UseState;
