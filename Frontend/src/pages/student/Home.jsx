import React from "react";
import Companies from "../../components/student/Companies";
import Hero from "../../components/student/Hero";
import CourseSection from "../../components/student/CourseSection";
import TestimonialSection from "../../components/student/TestimonialSection";
import CallToAction from "../../components/student/CallToAction";

const Home = () => {
  return (
    <>
      <div>
        <Hero />
      </div>
      <div>
        <Companies />
      </div>
      <div>
        <CourseSection />
      </div>
      <div>
        <TestimonialSection />
      </div>
      <div>
        <CallToAction />
      </div>
    </>
  );
};

export default Home;
