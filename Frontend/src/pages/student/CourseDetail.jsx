import React from "react";
import { AppContext } from "../../context/AppContext";
import { useParams } from "react-router-dom";
import { assets } from "../../assets/assets";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosPlayCircle,
} from "react-icons/io";
import { FaClockRotateLeft } from "react-icons/fa6";
import humanizeDuration from "humanize-duration";

const CourseDetail = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = React.useState(null);
  const [openSection, setOpenSection] = React.useState({});
  const {
    allCourses,
    calculateAverageRating,
    calculateChapterTime,
    calculateCourseDuration,
    calculateNoOfLectures,
  } = React.useContext(AppContext);

  const fetchCourse = async () => {
    const findCourse = allCourses.find((course) => course._id === id);
    setCourseData(findCourse);
  };
  const toggleSection = (sectionId) => {
    setOpenSection((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  React.useEffect(() => {
    fetchCourse();
  }, []);
  return (
    <div className="flex xl:flex-row flex-col gap-10 pt-5 md:pt-10 xl:pt-20">
      <div className="container">
        {/* //  Left Column  */}
        <div className="max-w-xl space-y-2">
          <h1 className="text-xl md:text-2xl font-semibold xl:text-4xl">
            {courseData?.courseTitle}
          </h1>
          <p
            className="text-gray-700 w-[100%] md:w-[90%] tracking-wide"
            dangerouslySetInnerHTML={{
              __html: courseData?.courseDescription.slice(0, 200),
            }}
          ></p>
          <div className="flex items-center space-x-2">
            <p>{calculateAverageRating(courseData)}</p>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <img
                  src={
                    i < Math.floor(calculateAverageRating(courseData))
                      ? assets.star
                      : assets.star_blank
                  }
                  key={i}
                  alt=""
                  className="w-3 h-3"
                />
              ))}
            </div>
            <p>
              ({courseData?.courseRatings?.length}{" "}
              {courseData?.courseRatings?.length > 1 ? "ratings" : "rating"})
            </p>
            <p>
              {courseData?.enrolledStudents?.length}{" "}
              {courseData?.enrolledStudents?.length > 1
                ? "students"
                : "student"}
            </p>
          </div>
          <div className="pt-8">
            <h2 className="text-lg md:text-xl text-gray-600">
              Course Structure
            </h2>
            <div className="pt-5">
              {courseData?.courseContent.map((chapter, index) => {
                return (
                  <div
                    className="border border-gray-700 mb-5 rounded-sm cursor-pointer bg-white"
                    key={index}
                  >
                    {/* Chapter Header */}
                    <div
                      className="flex items-center justify-between py-3 px-3 md:px-5 xl:px-7"
                      onClick={() => toggleSection(index)}
                    >
                      <div className="flex items-center gap-2">
                        {openSection[index] ? (
                          <IoIosArrowDown className="text-xl font-semibold" />
                        ) : (
                          <IoIosArrowForward className="text-xl font-semibold text-gray-600" />
                        )}
                        <p className="font-bold tracking-wide">
                          {chapter?.chapterTitle}
                        </p>
                      </div>
                      <div className="flex items-center gap-5">
                        <p>
                          {chapter?.chapterContent.length} lectures -{" "}
                          {calculateChapterTime(chapter)}
                        </p>
                      </div>
                    </div>

                    {/* Lectures List */}
                    <div
                      className={`overflow-hidden transition-all duration-300
                    ${openSection[index] ? "max-h-96" : "max-h-0"} pr-5`}
                    >
                      <ul className="list-disc pl-4 md:pl-8 xl:pl-10 text-gray-900">
                        {chapter?.chapterContent.map((lecture, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-2 py-2  text-md"
                          >
                            <IoIosPlayCircle className="" />
                            <div className="flex items-center justify-between w-full">
                              <p>{lecture?.lectureTitle}</p>
                              <div className="flex gap-2">
                                {lecture?.isPreviewFree && (
                                  <p className="text-blue-500 cursor-pointer text-right">
                                    Preview
                                  </p>
                                )}
                                <p>
                                  {humanizeDuration(
                                    lecture?.lectureDuration * 60 * 1000,
                                    {
                                      units: ["h", "m"],
                                    }
                                  )}
                                </p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="pt-10 md:py-20 text-sm md:text-default course_desc">
            <h1 className=" text-primary font-semibold">Course Description</h1>
            <p
              className="text-gray-700 w-[100%] md:w-[90%] tracking-wide"
              dangerouslySetInnerHTML={{
                __html: courseData?.courseDescription,
              }}
            ></p>
          </div>
        </div>
        {/* // Right Column  */}
        <div className="max-w-xl z-10  rounded-t-md rounded-b-md overflow-hidden bg-gray-200 ">
          <img src={courseData?.courseThumbnail} alt="" className="rounded-t-md"/>
          <div className="p-5 ">
            <div className="flex  items-center gap-2 text-red-400">
              <FaClockRotateLeft className="text-lg md:text-xl xl:text-2xl"/>
              <p><span className="font-bold">5 Days</span> Left at this Price!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
