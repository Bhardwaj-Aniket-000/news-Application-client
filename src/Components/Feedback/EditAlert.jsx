import React from "react";
import { useFeedbacks } from "../../../hooks/useFeedbacks";
import Spinner from "./Spiner";
import spinnerimg from "../../../assets/feedback/spinner.svg";

const EditAlert = () => {
  const {
    formError,
    onFeedbackUpdate,
    editAlertValue,
    setEditAlertValue,
    spinner,
  } = useFeedbacks();

  return (
    <div className="editAlert w-[300px] bg-white absolute top-1/2 -translate-y-1/2 md:-translate-y-0  md:top-0 left-1/2 -translate-x-1/2 z-20 rounded-md:">
      <form
        className="editAlert p-4 rounded-md shadow-2xl shadow-slate-500 bg-gradient-to-tl from-white to-slate-300 relative"
        onSubmit={onFeedbackUpdate}
      >
        {spinner.type == "edit" && <Spinner img={spinnerimg} />}
        {/* <div className=""> */}
        {/* <h2 className="my-2 text-slate-600 text-xs capitalize">
            <b className="capitalize">{user}</b> , edit your feedback .
          </h2> */}
        {/* <span
          className="border border-slate-300 bg-red-800 text-white font-bold h-6 w-6 rounded-full text-xs cursor-pointer flex justify-center items-center absolute top-1 left-1/2 -translate-x-1/2"
          onClick={() => {
            setEditAlert({
              showEdit: !editAlert.showEdit,
              updateResponse: "",
            });
            setSpinner(false);
          }}
        >
          &#10005;
        </span> */}
        {/* </div> */}
        <div className="editAlert relative pb-5 ">
          <select
            className="editAlert w-full bg-transparent mt-1 p-1 border-x-0 border-t-0 border-b border-b-slate-500 text-sm font-normal outline-none text-gray-600 cursor-pointer"
            value={editAlertValue.typeFeedback}
            onChange={(e) =>
              setEditAlertValue({
                ...editAlertValue,
                typeFeedback: e.target.value,
              })
            }
          >
            <option value="" hidden>
              Select-Feedback-type
            </option>
            <option className="bg-slate-300" value="good">
              Good
            </option>
            <option className="bg-slate-300" value="very good">
              Very Good
            </option>
            <option className="bg-slate-300" value="bad">
              Bad
            </option>
            <option className="bg-slate-300" value="very bad">
              Very Bad
            </option>
            <option className="bg-slate-300" value="excellent">
              Excellent
            </option>
          </select>
        </div>
        <div className="relative pb-3 editAlert">
          <textarea
            rows="2"
            className="w-full bg-slate-200 text-sm mt-2 rounded-md outline-none p-2 border border-gray-500 placeholder-gray-600"
            placeholder="Type Your Feedback"
            value={editAlertValue.content}
            onChange={(e) =>
              setEditAlertValue({ ...editAlertValue, content: e.target.value })
            }
          ></textarea>
        </div>
        <p className="text-red-600 text-xs">{formError}</p>
        <div className="flex items-center mt-1 relative editAlert">
          {spinner.type == "edit" ? (
            <button
              className="px-3 py-1 text-sm text-gray-600 cursor-pointer rounded-sm outline-none bg-red-600"
              disabled
            >
              Save
            </button>
          ) : (
            <button className="px-3 py-1 text-sm text-white cursor-pointer rounded-sm outline-none bg-red-600">
              Save
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default EditAlert;
