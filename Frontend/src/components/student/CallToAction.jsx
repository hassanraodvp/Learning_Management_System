import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CallToAction = () => {
  return (
    <div className="pt-20">
      <div className="container">
        <div className="flex flex-col text-center items-center space-y-4 justify-center">
          <h2 className="text-xl md:text-2xl xl:text-4xl font-semibold">Learn Anything, Anytime & Anywhere</h2>
          <p className="text-sm tracking-wide w-[85%] md:w-[50%] xl:w-[40%]">Every learner is a teacher, and every teacher is a learner. Every course is a learning experience. Anything you want to learn, we have it.</p>
          <div className="flex justify-center gap-5 items-center">
            <button className="bg-secondary text-white cursor-pointer hover:bg-transparent hover:text-primary font-semibold tracking-wide px-10 py-3 border rounded-md">Get Started</button>
            <button className="flex rounded-md gap-2 items-center border px-6 cursor-pointer py-3">Learn More <FaArrowRight className="text-xl" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
