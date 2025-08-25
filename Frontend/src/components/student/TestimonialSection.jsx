import React from "react";
import { assets, dummyTestimonial } from "../../assets/assets";
import { Link } from "react-router-dom";

const TestimonialSection = () => {
  return (
    <div className="pt-20">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <h2 className="text-xl md:text-2xl xl:text-4xl font-semibold">
            Testimonials
          </h2>
          <p className="text-sm tracking-wide w-[85%] md:w-[50%] xl:w-[40%]">
            Hear from our learners as they share their journeys of
            transformation, success, and how our platform has made a difference
            in their lives
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
          {dummyTestimonial.map((testimonial, index) => (
            <div key={index} className="flex flex-col ">
              <div className="flex items-center gap-2 bg-gray-200 px-5 py-3 rounded-md">
                <img
                  src={testimonial.image}
                  alt=""
                  className="w-10 md:w-16 md:h-16 h-10 rounded-full"
                />
                <div className="flex flex-col text-left">
                  <h3 className="text-md md:text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-sm md:text-md">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex flex-col space-y-3 px-5 border-l border-r border-b border-gray-200 rounded-md pt-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <img
                      src={
                        i < Math.floor(testimonial.rating)
                          ? assets.star
                          : assets.star_blank
                      }
                      key={i}
                      alt=""
                      className="w-4 h-4 "
                    />
                  ))}
                </div>
                <p>
                  <span className="font-semibold">“</span>
                  {testimonial.feedback}
                  <span className="font-semibold">”</span>
                </p>
                <Link to={"/"} className="text-blue-700 hover:text-blue-500 underline pt-2 pb-5 underline-offset-3">Read-More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
