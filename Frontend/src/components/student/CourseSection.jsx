import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
import { AppContext } from "../../context/AppContext";

const CourseSection = () => {
  const { allCourses } = useContext(AppContext);
  return (
    <div className="pt-30">
      <div className="container">
        <h2 className="text-center text-xl md:text-2xl xl:text-4xl font-semibold">
          Leran from the Best
        </h2>
        <p className="text-center pt-3 mx-auto text-gray-600 text-sm md:text-base xl:text-lg w-[85%] md:w-[50%] xl:w-[40%]">
          Discover our top-rated courses accross various categories. From coding
          and design to busisness and wellness, our courses are crafted to
          deliver resullts
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-10">
          {allCourses.slice(0, 4).map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
        <Link
          to={"/course-list"}
          onClick={() => scrollTo(0, 0)}
          className="mx-auto block w-fit mt-10 px-10 border border-gray-300 py-3 rounded-md bg-transparent"
        >
          Show all Courses
        </Link>
      </div>
    </div>
  );
};

export default CourseSection;
