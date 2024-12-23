import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useFeedbacks } from "../../../hooks/useFeedbacks";

const MoreOptions = ({ position }) => {
  const location = useLocation();
  const { setAlertType, dangour, setDangour } = useFeedbacks();

  return (
    <div className={`bg-slate-700 fixed rounded-md z-30`} style={{ ...position }}>
      <ul className="flex flex-col rounded-md">
        <Link
          to="/feedbackAuth"
          state="from sendFeedback"
          className="more-options-link rounded-md"
        >
          Move to Sign-Up
        </Link>
        <Link
          className="more-options-link"
          to="/feedbackAuth/login"
          onClick={() => {
            localStorage.removeItem("Newspulse_Token");
            setAlertType("logout");
            setTimeout(() => {
              setAlertType("");
            }, 3000);
          }}
        >
          Logout
        </Link>
        {location.pathname == "/feedbackAuth/ownfeedbacks" && (
          <Link
            className="more-options-link"
            onClick={() => {
              setDangour((prevState) => {
                return { ...prevState, showDangour: !dangour.showDangour };
              });
            }}
          >
            Delete Your Account
          </Link>
        )}
        {location.pathname == "/feedbackAuth/ownfeedbacks" ? (
          <NavLink
            className="more-options-link border rounded-md"
            to="/feedbackAuth/sendfeedback"
          >
            Show all Feedbacks
          </NavLink>
        ) : (
          <Link
            className="more-options-link border rounded-md"
            to="/feedbackAuth/ownfeedbacks"
          >
            Show Your Feedbacks
          </Link>
        )}
      </ul>
    </div>
  );
};

export default MoreOptions;
