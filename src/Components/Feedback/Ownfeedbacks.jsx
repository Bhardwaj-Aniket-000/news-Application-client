import React from "react";
import { useFeedbacks } from "../../../hooks/useFeedbacks";
import FeedbackForm from "./FeedbackForm";
import Alert from "../Alert";
import EditAlert from "./EditAlert";
import edit from "../../../assets/feedback/edit.svg";
import deleteIcon from "../../../assets/feedback/delete2.svg";
import Spinner from "./Spiner";
import spinnerimg from "../../../assets/feedback/spinner.svg";
import DeleteAlert from "./DeleteAlert";
import LoadingBar from "react-top-loading-bar";

const Ownfeedbacks = () => {
  const {
    feedback,
    user,
    uniqueId,
    setFeedbacks,
    onFeedbackDelete,
    alertType,
    setEditAlert,
    editAlert,
    setEditAlertValue,
    spinner,
    dangour,
    showOptions,
    setShowOptions,
    progress
  } = useFeedbacks();

  const handleClick = (e) => {
    if (showOptions) {
      if (e.target.id != "moreOption") {
        setShowOptions(false);
      }
    }
  };
  const handleEditAlert = (e) => {
    if (editAlert.showEdit) {
      if (!e.target.parentElement.className.includes("editAlert")) {
        setEditAlert({
          showEdit: false,
          updateResponse: "",
        });
      }
    }
  };

  const filteredArray = feedback && feedback.filter(
    (feedback) => feedback.userAccess == uniqueId
  );
  const style = {
    position: "absolute",
    background: "red",
  };

  return (
    <div
      className={`main w-full pb-5 md:pb-1 md:h-[460px] md:flex bg-slate-200 `}
      onClick={(e) => {
        handleClick(e);
        handleEditAlert(e);
      }}
    >
      <LoadingBar style={style} progress={progress} />
      {alertType == "delete" && (
        <Alert
          content={`successfully deleted your feedback  .`}
          bgcolor="bg-red-200"
          btncolor="text-red-400"
        />
      )}
      {alertType == "edit" && (
        <Alert
          content={` feedback updated success .`}
          bgcolor="bg-green-200"
          btncolor="text-green-400"
        />
      )}
      {alertType == "share" && (
        <Alert
          content={` feedback successfully shared .`}
          bgcolor="bg-green-200"
          btncolor="text-green-400"
        />
      )}

      {editAlert.showEdit && <EditAlert />}
      {dangour.showDangour && <DeleteAlert />}
      <FeedbackForm />

      <div
        className={`w-full md:w-[60%] h-full p-3 py-10 flex flex-col items-center gap-3 overflow-auto relative`}
      >
        {spinner.type == "delete" && <Spinner img={spinnerimg} />}
        <p className="text-xs capitalize font-medium text-center mb-2 text-slate-700">
          <span className="text-yellow-600 text-lg">&#10030;</span> here those feedback show which are shared from
          <span className="font-bold capitalize text-sm"> {user} .</span>
        </p>
        <div
          className={`p-2 w-full md:w-10/12 flex flex-col justify-center items-center gap-3 mx-auto`}
        >
          {!feedback || filteredArray.length == 0 ? (
            <p className="text-xs text-center font-medium capitalize text-slate-700">
              not any feedbacks , share your first feedback
              <span className="font-bold"> , {user}</span> .
            </p>
          ) : (
            filteredArray.map((item) => {
              return (
                <div className="w-full" key={crypto.randomUUID()}>
                  <div
                    className={`w-full md:w-[650px] p-1 md:p-3 border border-gray-300 rounded-md  ${
                      spinner.type && "bg-gray-300"
                    }`}
                    key={crypto.randomUUID()}
                  >
                    <p className="text-xs md:text-sm font-medium mt-1 text-gray-700">
                      {item.typeFeedback} feedback from
                      <span className="font-bold"> - {item.email}</span>
                    </p>
                    <p className="text-xs mt-1 font-medium">{item.content}</p>
                    <p className="text-[10px] mt-2 text-blue-800 font-medium">
                      {item.time}
                    </p>
                  </div>
                  <div className="flex items-center justify-end">
                    {spinner.type ? (
                      <button className="mt-1 rounded-sm" disabled>
                        <img src={edit} className="w-5" alt="edit svg icon" />
                      </button>
                    ) : (
                      <button
                        className="mt-1 rounded-sm"
                        onClick={() => {
                          setEditAlert({
                            showEdit: !editAlert.showEdit,
                            updateResponse: item,
                          });
                          setEditAlertValue({
                            typeFeedback: item.typeFeedback,
                            content: item.content,
                          });
                        }}
                      >
                        <img src={edit} className="w-5" alt="edit svg icon" />
                      </button>
                    )}
                    {spinner.type ? (
                      <button
                        className="mt-1 ml-2 rounded-sm"
                        onClick={() => {
                          setFeedbacks(
                            feedback.filter((feed) => feed._id != item._id)
                          );
                          onFeedbackDelete(item._id);
                        }}
                        disabled
                      >
                        <img
                          src={deleteIcon}
                          className="w-5"
                          alt="edit svg icon"
                        />
                      </button>
                    ) : (
                      <button
                        className="mt-1 ml-2 rounded-sm"
                        onClick={() => {
                          onFeedbackDelete(item._id);
                        }}
                      >
                        <img
                          src={deleteIcon}
                          className="w-4"
                          alt="edit svg icon"
                        />
                      </button>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Ownfeedbacks;
