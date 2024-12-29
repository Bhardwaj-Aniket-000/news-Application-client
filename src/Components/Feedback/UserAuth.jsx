import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useFeedbacks } from "../../../hooks/useFeedbacks";
import Spinner from "./Spiner";
import spinnerimg from "../../../assets/feedback/spinner.svg";

const UserAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { onSignupSubmit, signupError, spinner } = useFeedbacks();

  useEffect(() => {
    if (location.state == "from sendFeedback") {
      return;
    }
    if (localStorage.getItem("Newspulse_Token")) {
      navigate("/feedbackAuth/sendfeedback");
      return;
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className=" p-2 pt-5 md:p-0 h-full w-full md:w-[40%] flex items-center justify-center">
      <form
        className="w-full md:full p-2 md:p-7 flex flex-col justify-center rounded-md shadow-xl shadow-slate-500 bg-gradient-to-tl from-slate-400 to-slate-100 relative"
        onSubmit={handleSubmit(onSignupSubmit)}
      >
        {spinner.type == "signup" && <Spinner img={spinnerimg} />}
        <h2 className="text-xs md:text-base capitalize md:mb-5 font-medium text-slate-600">
          Sign-Up to leave a feefback{" "}
        </h2>
        <div className="relative pb-3 ">
          <input
            {...register("username", {
              required: { value: true, message: "Username Missing" },
              maxLength: {
                value: 20,
                message: "Maximum 20 characters are allowed",
              },
              minLength: {
                value: 3,
                message: "Minimum 3 Charaters are allowed",
              },
            })}
            type="text"
            placeholder="Enter Username"
            autoComplete="off"
            className="w-full placeholder-gray-600 p-1 md:p-2 text-sm mx-0 border-x-0 border-t-0 border-slate-500 rounded-none bg-transparent autofill:bg-transparent"
          />
          {errors.username?.message && (
            <p className="text-red-500 text-xs absolute -bottom-1" role="alert">
              {errors.username.message}
            </p>
          )}
        </div>
        <div className="relative pb-3">
          <input
            type="email"
            autoComplete="off"
            {...register("email", {
              required: { value: true, message: "E-Mail - Missing" },
            })}
            placeholder="Enter E-Mail"
            className="w-full placeholder-gray-600 p-1 md:p-2 my-2 text-sm mx-0 border-x-0 border-t-0 border-slate-500 rounded-none bg-transparent"
          />
          {errors.email?.message && (
            <p className="text-red-500 text-xs absolute -bottom-0" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="relative pb-3">
          <input
            type="password"
            {...register("password", {
              required: { value: true, message: "Password Missing" },
              maxLength: {
                value: 16,
                message: "passwors must be contains 16 characters",
              },
              minLength: {
                value: 8,
                message: "password must be 8 charcaters long",
              },
            })}
            placeholder="Enter password"
            className="w-full placeholder-gray-600 p-1 md:p-2 my-2 text-sm mx-0 border-x-0 border-t-0 border-slate-500 rounded-none bg-transparent"
          />
          {errors.password?.message && (
            <p className="text-red-500 text-xs absolute -bottom-0" role="alert">
              {errors.password.message}
            </p>
          )}
        </div>
        <p role="alert" className="text-red-600 text-xs font-medium">
          {signupError}
        </p>
        <div className="flex items-center py-1 md:py-2">
          {spinner.type == "signup" ? (
            <button
              className="px-2 py-1 w-20 md:w-24 text-gray-400 text-sm rounded-sm outline-none bg-blue-800"
              disabled
            >
              Sign Up
            </button>
          ) : (
            <button className="px-2 py-1 w-20 md:w-24 text-white text-sm cursor-pointer rounded-sm outline-none bg-blue-600">
              Sign Up
            </button>
          )}
          {spinner.type != "signup" &&
            location.state == "from sendFeedback" && (
              <button
                className="px-2 py-1 text-white ml-2 text-sm cursor-pointer rounded-sm outline-none bg-blue-600"
                onClick={() => navigate("/feedbackAuth/sendFeedback")}
              >
                Go to Feedbacks
              </button>
            )}
          {spinner.type != "signup" && (
            <p className="text-xs ml-2">
              Already have an Account ?
              <Link
                to="/feedbackAuth/login"
                className="text-blue-800 ml-1 text-xs md:text-sm"
              >
                {" "}
                Login
              </Link>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default UserAuth;
