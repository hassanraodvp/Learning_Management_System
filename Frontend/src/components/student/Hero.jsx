import React from "react";
import { assets } from "../../assets/assets";
import SearchBar from "../../components/SearchBar";

const Hero = () => {
  return (
    <div className="py-32 bg-primary">
      <div className="container">
        <div className="mx-auto flex flex-col items-center">
          <div className="flex justify-center text-center items-center flex-col space-y-4">
            <h1 className="relative text-white text-xl md:text-2xl xl:text-4xl w-[90%] md:w-[60%] xl:w-[50%]">
              Empower your Future with the Courses design to
              <span className="text-blue-500 pl-2">fit your Choice</span>
              <img
                src={assets.sketch}
                alt=""
                className="hidden md:block absolute right-0 w-40 xl:-bottom-2"
              />
            </h1>
            <p className="text-white text-sm w-[85%] md:w-[50%] xl:w-[40%] pb-10">
              We bring together world-class instructors, interactive content,
              and a supportive community to help you acheive your personal and
              professional goals
            </p>
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
