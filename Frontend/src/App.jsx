import React from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader.jsx";
import { AppContextProvider } from "./context/AppContext.jsx";

// Import Pages
const StudentLayout = React.lazy(() => import("./layout/StudentLayout.jsx"));
const EducatorLayout = React.lazy(() => import("./layout/EducatorLayout.jsx"));
const Home = React.lazy(() => import("./pages/student/Home"));
const CoursesList = React.lazy(() => import("./pages/student/CoursesList"));
const CourseDetail = React.lazy(() => import("./pages/student/CourseDetail"));
const MyEnrollment = React.lazy(() => import("./pages/student/MyEnrollment"));
const Player = React.lazy(() => import("./pages/student/Player"));
const StudentEnroll = React.lazy(() => import("./pages/educator/StudentEnroll"));
const MyCourses = React.lazy(() => import("./pages/educator/MyCourses"));
const AddCourses = React.lazy(() => import("./pages/educator/AddCourses"));
const Dashboard = React.lazy(() => import("./pages/educator/Dashboard"));

const App = () => {
  return (
    <AppContextProvider>
      <React.Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<StudentLayout />}>
            <Route path="" element={<Home />} />
            <Route path="course-list" element={<CoursesList />} />
            <Route path="course-list/:input" element={<CoursesList />} />
            <Route path="course/:id" element={<CourseDetail />} />
            <Route path="my-enrollment" element={<MyEnrollment />} />
             <Route path="player/:courseid" element={<Player />} />
          </Route>
          <Route path="/educator" element={<EducatorLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="add-course" element={<AddCourses />} />
            <Route path="my-courses" element={<MyCourses />} />
            <Route path="student-enrolled" element={<StudentEnroll />} />
          </Route>
        </Routes>
      </React.Suspense>
    </AppContextProvider>
  );
};

export default App;
