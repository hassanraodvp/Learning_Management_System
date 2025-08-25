import React from "react";
import { assets } from "../../assets/assets";


const Companies = () => {
  return (
    <div className="pt-30">
      <div className="container">
        <p className="flex justify-center text-center text-xl md:text-2xl xl:text-4xl font-semibold pb-5">
          Trusted by Learners from
        </p>
        <div className="flex justify-center flex-wrap gap-3 md:gap-5 items-center xl:gap-10 pt-5">
          <img
            src={assets.microsoft_logo}
            alt=""
            className="w-20 md:w-28 xl:w-32"
          />
          <img
            src={assets.walmart_logo}
            alt=""
            className="w-20 md:w-28 xl:w-32"
          />
          <img
            src={assets.accenture_logo}
            alt=""
            className="w-20 md:w-28 xl:w-32"
          />
          <img
            src={assets.adobe_logo}
            alt=""
            className="w-20 md:w-28 xl:w-32"
          />
          <img
            src={assets.paypal_logo}
            alt=""
            className="w-20 md:w-28 xl:w-32"
          />
        </div>
      </div>
    </div>
  );
};

export default Companies;
