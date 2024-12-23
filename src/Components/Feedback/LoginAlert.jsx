import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useFeedbacks } from "../../../hooks/useFeedbacks";
import Spinner from "./Spiner";
import spinnerimg from "../../../assets/feedback/spinner.svg";

const LoginAlert = () => {
  const navigate = useNavigate();
  const { onLoginSubmit, loginError, spinner, setSpinner } = useFeedbacks();
  
  useEffect(() => {
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
    <div className="h-full w-full pt-10 md:pt-0 md:w-[40%] flex items-center justify-center relative">
      <button
        className="absolute top-2 left-2 text-base md:text-2xl py-0 px-5 rounded-sm cursor-pointer bg-slate-400"
        onClick={() => {
          navigate("/feedbackAuth");
          setSpinner(false);
        }}
      >
        &#10094;
      </button>
      <form
        onSubmit={handleSubmit(onLoginSubmit)}
        className="w-[90%] md:w-full p-2 md:p-7 rounded-md shadow-2xl shadow-slate-200 bg-gradient-to-tl from-slate-400 to-slate-100 relative"
      >
        {spinner.type == "login" && <Spinner img={spinnerimg} />}
        <div className="flex justify-between items-start">
          <h2 className="font-medium md:font-bold text-base md:text-xl text-gray-700 mb-5">
            Login to your account
          </h2>
          <span
            className="bg-slate-300 p-1 px-2 rounded-full text-sm cursor-pointer"
            onClick={() => {
              navigate("/feedbackAuth");
              setSpinner(false);
            }}
          >
            &#10005;
          </span>
        </div>
        <div className="relative pb-2">
          <input
            type="email"
            {...register("email", {
              required: { value: true, message: "Enter a valid E-Mail" },
            })}
            placeholder="Enter Registered E-Mail"
            className="w-full placeholder-gray-600 p-1 md:p-2 md:my-2 text-sm mx-0 border-x-0 border-t-0 border-slate-500 rounded-none bg-transparent"
          />
          {errors.email?.message && (
            <p className="text-red-500 text-xs absolute -bottom-2" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="relative pb-2">
          <input
            type="password"
            {...register("password", {
              required: { value: true, message: "Enter password" },
              minLength: {
                value: 8,
                message: "Password Length Sholud be 8-16 characters",
              },
              maxLength: {
                value: 16,
                message: "Password Length Sholud be 8-16 characters",
              },
            })}
            placeholder="Enter Password"
            className="w-full placeholder-gray-600 p-1 md:p-2 md:my-2 text-sm mx-0 border-x-0 border-t-0 border-slate-500 rounded-none bg-transparent"
          />
          {errors.password?.message && (
            <p className="text-red-500 text-xs absolute -bottom-2">
              {errors.password.message}
            </p>
          )}
          {<p className="text-red-500 text-xs">{loginError}</p>}
        </div>
        <div className="flex justify-center items-center">
          {spinner.type == "login" ? (
            <button
              type="submit"
              className="bg-blue-700 mt-3 p-1 px-2 md:px-5 rounded-sm text-gray-400 text-sm"
              disabled
            >
              Login
            </button>
          ) : (
            <button
              type="submit"
              className="bg-blue-600 mt-3 p-1 px-5 rounded-sm text-white text-sm"
            >
              Login
            </button>
          )}
          <p
            className="bg-red-600 mt-3 p-1 px-5 rounded-sm text-white text-sm ml-2 cursor-pointer"
            onClick={() => {
              navigate("/feedbackAuth");
              setSpinner(false);
            }}
          >
            Close
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginAlert;
