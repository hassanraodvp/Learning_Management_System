import React from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { currency, calculateAverageRating } = React.useContext(AppContext);
  return (
    <Link
      to={`/course/${course._id}`}
      onClick={() => scrollTo(0, 0)}
      className="border border-gray-300 rounded-md space-y-3"
    >
      <div className="flex flex-col">
        <img
          src={course.courseThumbnail}
          alt=""
          className="mb-2 rounded-t-md"
        />
        <div className="pl-3 pb-5 space-y-1">
          <h3 className="text-lg font-semibold">{course.courseTitle}</h3>
          <p>{course.educator.name}</p>
          <div className="flex items-center space-x-2">
            <p>{calculateAverageRating(course)}</p>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <img
                  src={
                    i < Math.floor(calculateAverageRating(course))
                      ? assets.star
                      : assets.star_blank
                  }
                  key={i}
                  alt=""
                  className="w-3 h-3"
                />
              ))}
            </div>
            <p>{course.courseRatings.length}</p>
          </div>
          <p className="font-semibold tracking-wide text-xl">
            {currency}
            {(
              course.coursePrice -
              (course.discount * course.coursePrice) / 100
            ).toFixed(2)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
