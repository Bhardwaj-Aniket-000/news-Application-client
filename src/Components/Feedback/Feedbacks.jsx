import React, { useEffect, useState } from "react";
import FeedbackShimmer from "./FeedbackShimmer";
import No_Internet from "../No_Internet";
import { useFeedbacks } from "../../../hooks/useFeedbacks";

const Feedbacks = () => {
  const { shimmerEffect, feedback, user } = useFeedbacks();

  return (
    <>
      <div className=" w-full md:w-[60%] h-full p-1 md:p-3 py-10 flex flex-col items-center gap-3 overflow-scroll">
        {shimmerEffect && <FeedbackShimmer />}
        {!feedback ? (
          <h1 className="font-medium capitalize text-slate-600 text-xs md:text-sm">
            No feedbacks yet , we expect that our first feedback share from ,
            <span className="font-bold">{user}</span>.
          </h1>
        ) : (
          feedback.map((item) => {
            // crypto.randomUUID() method return a unique id ..
            return (
              <div
                className="w-full md:w-[650px] p-1 md:p-3 border border-gray-300 rounded-md"
                key={crypto.randomUUID()}
              >
                <p className="text-xs md:text-sm font-medium md:font-medium mt-1 text-gray-700">
                  {item.typeFeedback} feedback from
                  <span className="font-medium md:font-bold text-black"> - {item.email}</span>
                </p>
                <p className="text-xs mt-1 font-medium text-gray-700">{item.content}</p>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Feedbacks;
