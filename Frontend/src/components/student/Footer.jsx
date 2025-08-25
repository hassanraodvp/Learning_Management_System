import React from "react";
import { assets } from "../../assets/assets";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10 xl:py-20">
      <div className="border-t border-slate-900/5 py-10">
        <img
          src={assets.logo}
          alt=""
          className="mx-auto w-10 md:w-15 rounded-sm"
        />
        <p className="mt-5 text-center text-sm leading-6 text-slate-500">
          Cpyright © 2025, All rights reserved.
          <br />
           Made with ❤️ by <span className="font-semibold text-blue-500 tracking-wide underline underline-offset-4 cursor-pointer  hover:text-blue-700">@hassanakhtyr.</span>
        </p>
        <div className="mt-8 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
          <a href="#" className="flex items-center gap-2 text-xl hover:text-secondary">LinkedIn <FaLinkedin className="hover:text-blue-500"/></a>
          <div className="h-4 w-px bg-slate-500"></div>
          <a href="#" className="flex items-center gap-2 text-xl hover:text-secondary">GitHub <FaGithub className="hover:text-slate-900" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
