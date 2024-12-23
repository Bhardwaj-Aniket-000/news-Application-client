import React, { useState } from "react";
import { useFeedbacks } from "../../../hooks/useFeedbacks";
import Spinner from "./Spiner";
import spinnerimg from "../../../assets/feedback/spinner.svg";

const DeleteAlert = () => {
  const { dangour, setDangour,spinner } = useFeedbacks();

  return (
    <div className="bg-red-300 p-4 rounded-md shadow shadow-slate-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-50 border border-red-600">
      {spinner.type == "clearAcount" && <Spinner img={spinnerimg} />}
      <p className="text-xs text-red-600 capitalize font-bold">
        " dangour zone "
      </p>
      <span className="text-lg">🚫</span>
      <p className="text-xs font-medium capitalize text-center text-red-600 my-2">
        do you want , your Account permanently delete ?
      </p>
      <div className="my-2">
        <button
          className="bg-blue-600 rounded-sm px-4 py-1 text-white capitalize text-sm shadow shadow-slate-400"
          onClick={() =>
            setDangour({
              showDangour: dangour.showDangour,
              dangourText: "yes",
            })
          }
        >
          yes
        </button>
        <button
          className="bg-red-500 rounded-sm px-4 py-1 text-white capitalize text-sm shadow shadow-slate-400 ml-5"
          onClick={() =>
            setDangour({
              showDangour: !dangour.showDangour,
              dangourText: "no",
            })
          }
        >
          no
        </button>
      </div>
    </div>
  );
};

export default DeleteAlert;
