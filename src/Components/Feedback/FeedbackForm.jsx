import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import MoreOptions from "./MoreOptions";
import { useFeedbacks } from "../../../hooks/useFeedbacks";
import Spinner from "./Spiner";
import spinnerimg from "../../../assets/feedback/spinner.svg";

const FeedbackForm = () => {
  const {
    user,
    formError,
    onFeedbackSubmit,
    formValue,
    setFormValue,
    spinner,
    showOptions,
    setShowOptions,
  } = useFeedbacks();
  const [position, setPosition] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("Newspulse_Token")) {
      navigate("/feedbackAuth/login");
      return;
    }
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <>
      <div className="w-full h-full md:w-[40%] p-2 md:p-0 flex flex-col items-center justify-center relative">
        <button
          className="absolute top-2 left-2 text-base md:text-2xl py-0 px-5 rounded-sm cursor-pointer bg-slate-400"
          onClick={() => history.back()}
        >
          &#10094;
        </button>
        <h2 className="text-center mt-8 md:mt-0 mb-4 text-slate-600">
          Hello <b className="capitalize">{user}</b> , you can share your
          feedback now .
        </h2>
        <form
          className="w-[90%] md:w-full p-2 md:p-5 rounded-md shadow-2xl shadow-slate-200 bg-gradient-to-tl from-slate-400 to-slate-100 relative"
          onSubmit={handleSubmit(onFeedbackSubmit)}
        >
          {spinner.type == "sendfeedback" && <Spinner img={spinnerimg} />}
          <div className="relative pb-5">
            <select
              {...register("typeFeedback", {
                required: {
                  value: true,
                  message: "*Select at Least one Option",
                },
              })}
              className="w-full md:w-[400px] bg-transparent mt-2 p-1 border-x-0 border-t-0 border-b border-b-slate-500 text-sm font-normal outline-none text-gray-600 cursor-pointer"
              value={formValue.typeFeedback}
              onChange={(e) =>
                setFormValue({ ...formValue, typeFeedback: e.target.value })
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
            {errors.typeFeedback?.message && (
              <p
                className="text-red-600 text-xs absolute bottom-0"
                role="alert"
              >
                {errors.typeFeedback.message}
              </p>
            )}
          </div>
          <div className="relative pb-3">
            <textarea
              {...register("content", {
                required: { value: true, message: "Required field" },
                minLength: {
                  value: 10,
                  message: "Minimum 10 character's feedback is Allowed",
                },
              })}
              rows="1"
              className="w-full md:w-[400px] bg-slate-200 text-sm mt-2 rounded-md outline-none p-3 border border-gray-500 placeholder-gray-600"
              placeholder="Type Your Feedback"
              value={formValue.content}
              onChange={(e) =>
                setFormValue({ ...formValue, content: e.target.value })
              }
            ></textarea>
            {errors.content?.message && (
              <p
                className="text-red-600 text-xs absolute bottom-0"
                role="alert"
              >
                {errors.content.message}
              </p>
            )}
          </div>
          {formError && !formError.includes("feedback not updated yet") && (
            <p className="text-red-600 text-xs">{formError}</p>
          )}
          <div className="flex items-center mt-2 relative">
            {spinner.type == "sendfeedback" ? (
              <button
                type="submit"
                className="px-3 py-1 text-sm text-gray-500 rounded-sm outline-none bg-blue-800"
                disabled
              >
                &#10148;
              </button>
            ) : (
              <button
                type="submit"
                className="px-3 py-1 text-sm text-white cursor-pointer rounded-sm outline-none bg-blue-600"
              >
                &#10148;
              </button>
            )}
            <span
              className="ml-3 text-xl text-blue-700 cursor-pointer"
              id="moreOption"
              onClick={(e) => {
                setShowOptions(!showOptions);
                setPosition({
                  top: e.clientY,
                  left: e.clientX,
                });
              }}
            >
              &#9778;
            </span>
          </div>
        </form>
      </div>
      {showOptions && <MoreOptions position={position} />}
    </>
  );
};

export default FeedbackForm;

// first way to handle any form in react js...
// const [username,setUsername] = useState("")
// const [email,setEmail] = useState("")
// const [typeFeedback,setTypeFeedback] = useState("")
// const [content,setContent] = useState("")
// const [formData,setFormData] = useState({
//     username:"",
//     email:"",
//     typeFeedback:"",
//     content:""
// })
// value={formData.username} onChange={(e) => {
//   setFormData((prevState) => {
//      return {...prevState,username:e.target.value}
// })
// }}

// value={formData.email} onChange={(e) => {
//   setFormData((prevState) => {
//     return {...prevState,email:e.target.value}
//  })
// }}

// value={formData.typeFeedback} onChange={(e) => {
//   setFormData((prevState) => ({...prevState,typeFeedback:e.target.value}))
// }}

// value={formData.content} onChange={(e) => {
//   setFormData((prevState) => ({...prevState,content:e.target.value}))
// }}

// const feedback = {
//     username,
//     email,
//     typeFeedback,
//     content
// }
// setFeedbacks((prevState) => {
//     return [...prevState,formData]
// })

// second way to handle any form ip react js....

// const data = new FormData(e.target)
// const obj = {}
// data.forEach((index,value) => {
//   obj[value] = index
// });
// console.log("obj is",obj)
// setFeedbacks((prevState) => ([...prevState,obj]))

// third way to handle form in react js....
