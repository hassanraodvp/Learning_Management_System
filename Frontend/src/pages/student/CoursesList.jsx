import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import { AppContext } from "../../context/AppContext";
import CourseCard from "../../components/student/CourseCard";
import { RxCross2 } from "react-icons/rx";



const CoursesList = () => {
  const navigate = useNavigate();
  const { allCourses } = React.useContext(AppContext);
  const { input } = useParams();
  const [filteredCourses, setFilteredCourses] = React.useState([]);

  React.useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const tempCourse = allCourses.slice();

      input
        ? setFilteredCourses(
            tempCourse.filter((course) =>
              course.courseTitle.toLowerCase().includes(input.toLowerCase())
            )
          )
        : setFilteredCourses(tempCourse);
    }
  }, [allCourses, input]);

  return (
    <div className="pt-5 md:pt-20">
      <div className="container">
        <div className="flex justify-between items-center  md:flex-row flex-col space-y-4">
          <div className="flex items-center gap-2">
            <span
              className="text-blue-700 hover:text-blue-500 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </span>{" "}
            /<span>Course List</span>
          </div>
          <div className="w-[90%] md:w-[70%] xl:w-[50%] flex justify-end">
            <SearchBar data={input} />
          </div>
        </div>
        {input && (
          <div className="flex items-center gap-2 w-fit bg-gray-300 px-5 py-3 rounded-md mt-3">
            <p>{input}</p>{" "}
            <RxCross2 
              className=" cursor-pointer text-xl font-bold hover:text-red-500"
              onClick={() => navigate("/course-list")}
            />
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
          {filteredCourses.map((course, index) => {
            return <CourseCard key={index} course={course} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CoursesList;
