import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedbacks] = useState([]);
  const [shimmerEffect, setShimmerEffect] = useState(true);
  const [signupError, setSignupError] = useState();
  const [formError, setFormError] = useState();
  const [user, setuser] = useState("");
  const [uniqueId, setUniqueId] = useState();
  const [loginError, setLoginError] = useState();
  const [formValue, setFormValue] = useState({
    typeFeedback: "",
    content: "",
  });
  const [alertType, setAlertType] = useState("");
  const [editAlert, setEditAlert] = useState({
    showEdit: false,
    updateResponse: "",
  });
  const [editAlertValue, setEditAlertValue] = useState({
    typeFeedback: "",
    content: "",
  });
  const [spinner, setSpinner] = useState({ type: "" });
  const [dangour, setDangour] = useState({
    showDangour: false,
    dangourText: "no",
  });
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();
  const [progress, setProgress] = useState();

  useEffect(() => {
    fetch(`${process.env.BACKEND_URL}/api/v3/getFeedback`, {
      method: "get",
      headers: {
        Authorization: `bearer ${localStorage.getItem("Newspulse_Token")}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (location.pathname.includes("/feedbackAuth")) {
          setuser(res.username);
          setUniqueId(res.id);
          if (res.jwtEmpty || res.jwtExpires) {
            setFormError("you are not login for long time , please login once");
            setTimeout(() => {
              navigate("/feedbackAuth/login");
              localStorage.removeItem("Newspulse_Token");
              setFormError("");
            }, 3000);
            return;
          }
        }
      })
      .catch((err) => {
        setFormError("Check Internet Connection .");
        setTimeout(() => {
          setFormError("");
        }, 3000);
      });
  }, []);

  useEffect(() => {
    fetch(`${process.env.BACKEND_URL}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (!res.length) {
          setShimmerEffect(false);
          setFeedbacks(null);
          return;
        }
        setShimmerEffect(false);
        setFeedbacks(res);
      })
      .catch((err) => {
        setFeedbacks(null);
      });
  }, []);

  const onSignupSubmit = (data) => {
    setSpinner({ type: "signup" });
    if (localStorage.getItem("Newspulse_Token")) {
      setSignupError(
        "you are not signup again , while you are logging your account"
      );
      setSpinner(false);
      return;
    }
    setProgress(10);
    fetch(`${process.env.BACKEND_URL}/api/v3/signup`, {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setProgress(30);
        return res.json();
      })
      .then((res) => {
        if (res.error) {
          setSignupError(res.error);
          setTimeout(() => {
            setSignupError("");
          }, 3000);
          setSpinner(false);
          setProgress(100);
          return;
        }
        if (res.success) {
          setProgress(70);
          setuser(res.response.username);
          localStorage.setItem("Newspulse_Token", res.token);
          navigate("/feedbackAuth/sendfeedback");
          setAlertType("signup");
          setTimeout(() => {
            setAlertType("");
          }, 3000);
          setSpinner(false);
          setProgress(100);
        }
      })
      .catch((err) => {
        setSignupError("You are not registered , Check Internet Connection .");
        setTimeout(() => {
          setSignupError("");
        }, 3000);
        setSpinner(false);
        setProgress(100);
      });
  };

  const onFeedbackSubmit = (data) => {
    setProgress(10);
    setSpinner({ type: "sendfeedback" });
    setProgress(30);
    fetch(`${process.env.BACKEND_URL}/api/v3/sendFeedback`, {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${localStorage.getItem("Newspulse_Token")}`,
      },
    })
      .then((res) => {
        setProgress(50);
        return res.json();
      })
      .then((res) => {
        if (res.error) {
          setFormError(res.error);
          setTimeout(() => {
            setFormError("");
          }, 3000);
          setSpinner(false);
          setProgress(100);
          return;
        }
        setProgress(70);
        setFeedbacks((prevState) => [...(prevState || []), res.response]);
        setFormValue({ content: "", typeFeedback: "" });
        setAlertType("share");
        setTimeout(() => {
          setAlertType("");
        }, 3000);
        setSpinner(false);
        setProgress(100);
      })
      .catch((err) => {
        setFormError("Feedback not shared , Check Internet Connection . .");
        setTimeout(() => {
          setFormError("");
        }, 3000);
        setSpinner(false);
        setProgress(100);
      });
  };

  const onLoginSubmit = (data) => {
    setProgress(10);
    setSpinner({ type: "login" });
    fetch(`${process.env.BACKEND_URL}/api/v3/login`, {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setProgress(30);
        return res.json();
      })
      .then((res) => {
        if (res.error) {
          setLoginError(res.error);
          setTimeout(() => {
            setLoginError("");
          }, 3000);
          setSpinner(false);
          setProgress(100);
          return;
        }
        setProgress(70);
        setuser(res.findUser[0].username);
        setUniqueId(res.unique);
        localStorage.setItem("Newspulse_Token", res.token);
        navigate("/feedbackAuth/sendfeedback");
        setAlertType("login");
        setTimeout(() => {
          setAlertType("");
        }, 3000);
        setSpinner(false);
        setProgress(100);
      })
      .catch((err) => {
        setLoginError("Check Internet Connection .");
        setTimeout(() => {
          setLoginError("");
        }, 3000);
        setSpinner(false);
        setProgress(100);
      });
  };

  const onFeedbackDelete = (id) => {
    setSpinner({ type: "delete" });
    fetch(`${process.env.BACKEND_URL}/api/v3/deletefeedback`, {
      method: "delete",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${localStorage.getItem("Newspulse_Token")}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.error) {
          setFormError(res.error);
          setTimeout(() => {
            setFormError("");
          }, 3000);
          setSpinner(false);
          return;
        }
        if (res.success == true) {
          setAlertType("delete");
          setFeedbacks((prevState) =>
            prevState.filter((feed) => feed._id != id)
          );
          setTimeout(() => {
            setAlertType("");
          }, 2000);
        }
        setSpinner(false);
      })
      .catch((err) => {
        setFormError("feedback not deleted , try again later");
        setTimeout(() => {
          setFormError("");
        }, 3000);
        setSpinner(false);
      });
  };

  const onFeedbackUpdate = (e) => {
    setProgress(10);
    setSpinner({ type: "edit" });
    e.preventDefault();
    setProgress(20);
    fetch(`${process.env.BACKEND_URL}/api/v3/updatefeedback`, {
      method: "put",
      body: JSON.stringify({
        ...editAlertValue,
        id: editAlert.updateResponse._id,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${localStorage.getItem("Newspulse_Token")}`,
      },
    })
      .then((res) => {
        setProgress(30);
        return res.json();
      })
      .then((res) => {
        setProgress(50);
        if (res.jwtEmpty || res.jwtExpires) {
          setFormError("you are not login for long time , please login once");
          setTimeout(() => {
            navigate("/feedbackAuth/login");
            localStorage.removeItem("Newspulse_Token");
            setFormError("");
          }, 3000);
          setSpinner(false);
          setProgress(100);
          return;
        }
        if (res.error) {
          setFormError(res.error);
          setTimeout(() => {
            setFormError("");
          }, 3000);
          setSpinner(false);
          setProgress(100);
          return;
        }
        setProgress(70);
        setFeedbacks((prevState) =>
          prevState.filter((item) => item._id != res.response._id)
        );
        setEditAlert({
          showEdit: !editAlert.showEdit,
          updateResponse: "",
        });
        setFeedbacks((prevState) => [...prevState, res.response]);
        setAlertType("edit");
        setTimeout(() => {
          setAlertType("");
        }, 3000);
        setSpinner(false);
        setProgress(100);
      })
      .catch((err) => {
        setFormError("feedback not updated yet , try later .");
        setTimeout(() => {
          setFormError("");
        }, 3000);
        setSpinner(false);
        setProgress(100);
      });
  };

  useEffect(() => {
    if (dangour.dangourText == "yes") {
      setProgress(10);
      setSpinner({ type: "clearAcount" });
      setProgress(30);
      fetch(`${process.env.BACKEND_URL}/api/v3/clearAcount`, {
        method: "delete",
        headers: {
          Authorization: `bearer ${localStorage.getItem("Newspulse_Token")}`,
        },
      })
        .then((res) => {
          setProgress(50);
          return res.json();
        })
        .then((res) => {
          if (res.error) {
            setFormError(res.error);
            setTimeout(() => {
              setFormError("");
            }, 3000);
            setProgress(100);
            return;
          }
          if (res.success) {
            setProgress(70);
            setFeedbacks(res.userFeed);
            navigate("/feedbackAuth");
            localStorage.removeItem("Newspulse_Token");
            setDangour({
              showDangour: !dangour.showDangour,
              dangourText: "",
            });
            setAlertType("clearAcount");
            setTimeout(() => {
              setAlertType("");
            }, 3000);
            setSpinner(false);
          }
          setProgress(100);
        })
        .catch((err) => {
          setSpinner(false);
          setFormError("Account not Deleted , some error occured try later .");
          setTimeout(() => {
            setFormError("");
          }, 3000);
          setProgress(100);
        });
    }
  }, [dangour.dangourText]);

  return (
    <FeedbackContext.Provider
      value={{
        shimmerEffect,
        feedback,
        onSignupSubmit,
        signupError,
        user,
        formError,
        onFeedbackSubmit,
        uniqueId,
        onLoginSubmit,
        loginError,
        formValue,
        setFormValue,
        setFeedbacks,
        onFeedbackDelete,
        alertType,
        setAlertType,
        editAlert,
        setEditAlert,
        onFeedbackUpdate,
        editAlertValue,
        setEditAlertValue,
        spinner,
        setSpinner,
        dangour,
        setDangour,
        showOptions,
        setShowOptions,
        progress,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
