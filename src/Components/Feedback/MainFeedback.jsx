import React, { useEffect } from "react";
import Feedbacks from "./Feedbacks";
import { Outlet } from "react-router-dom";
import Alert from "../Alert";
import { useFeedbacks } from "../../../hooks/useFeedbacks";
import LoadingBar from "react-top-loading-bar";

const Feedback = () => {
  const {
    alertType,
    user,
    showOptions,
    setShowOptions,
    progress,
    feedback,
    setFeedbacks,
  } = useFeedbacks();
  const style = {
    position: "absolute",
    background: "red",
  };
  const handleClick = (e) => {
    if (showOptions) {
      if (e.target.id != "moreOption") {
        setShowOptions(false);
      }
    }
  };
  useEffect(() => {
    if (feedback) {
      if (feedback.length == 0) {
        setFeedbacks(null);
      }
    }
  }, []);

  return (
    // <FeedbackProvider>
    <div
      className="main w-full md:h-[500px] md:flex bg-slate-200 relative"
      onClick={handleClick}
    >
      <LoadingBar style={style} progress={progress} />
      {alertType == "login" && (
        <Alert
          content={`${user} , successfully login .`}
          bgcolor="bg-green-200"
          btncolor="text-green-500"
        />
      )}
      {alertType == "share" && (
        <Alert
          content={`feedback successfully shared .`}
          bgcolor="bg-blue-200"
          btncolor="text-blue-400"
        />
      )}
      {alertType == "signup" && (
        <Alert
          content={`${user} , you are successfully signed up .`}
          bgcolor="bg-green-200"
          btncolor="text-green-500"
        />
      )}
      {alertType == "logout" && (
        <Alert
          content={`${user} , successfully logout .`}
          bgcolor="bg-red-200"
          btncolor="text-red-400"
        />
      )}
      {alertType == "clearAcount" && (
        <Alert
          content={`${user} ,Your Acount Deleted Permanently .`}
          bgcolor="bg-red-200"
          btncolor="text-red-400"
        />
      )}
      {/* input field bg-color, headers authorization , html three dots icon , objectid.................................................. */}
      <Outlet />
      <Feedbacks />
    </div>
    // </FeedbackProvider>
  );
};

export default Feedback;
