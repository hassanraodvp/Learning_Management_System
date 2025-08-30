import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import humanizeDuration from 'humanize-duration'
export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(true);
  // Fetch all Courses
  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };
  // function to calculate average rating of the course
 const calculateAverageRating = (course) => {
  if (!course || !course.courseRatings || course.courseRatings.length === 0) {
    return 0;
  }
  let totalRating = 0;
  course.courseRatings.forEach((rating) => {
    totalRating += rating.rating;
  });
  return totalRating / course.courseRatings.length;
};
 // Function to calculate course Chapter Time
 const calculateChapterTime = (chapter) => {
   let time = 0;
   chapter.chapterContent.map((lecture) => {
     time += lecture.lectureDuration;
   });
   return humanizeDuration(time * 60 * 1000, {units: ["h", "m"]});
 }
 // Function to calculate course Duration
 const calculateCourseDuration = (course) => {
   let time = 0;
   course.courseContent.map((chapter) => {
    chapter.chapterContent.map((lecture) => {
      time += lecture.lectureDuration;
    })
  });
   return humanizeDuration(time * 60 * 1000, {units: ["h", "m"]});
 }
 // Function to calculate no. of lectures in the Course
 const calculateNoOfLectures = (course) => {
   let totalLectures = 0;
   course.courseContent.forEach((chapter) => {
      if(Array.isArray(chapter.chapterContent)){
        totalLectures += chapter.chapterContent.length
      }
   });
   return totalLectures
 }

  useEffect(() => {
    fetchAllCourses();
  }, []);
  const value = {
    currency,
    allCourses,
    calculateAverageRating,
    isEducator,
    setIsEducator,
    calculateChapterTime,
    calculateCourseDuration,
    calculateNoOfLectures
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
