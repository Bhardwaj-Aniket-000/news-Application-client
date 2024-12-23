import React from "react";

const Spinner = ({ img }) => {
  return (
    <div
      className={`flex justify-center items-center absolute z-30 bg-transparent top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
    >
      <img src={img} className="w-14 " alt="loading spinner" />
    </div>
  );
};

export default Spinner;
