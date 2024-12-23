import React from "react";

const Alert = ({ content, bgcolor, btncolor }) => {
  return (
    <div
      className={`${bgcolor} w-1/2 md:w-1/4 h-10 absolute top-1 right-5 z-10 p-2 flex items-center rounded-md`}
    >
      <i className={`${btncolor} font-medium md:font-extrabold}`}>&#10003;</i>
      <p className="text-xs font-medium capitalize ml-2">{content}</p>
    </div>
  );
};

export default Alert;
