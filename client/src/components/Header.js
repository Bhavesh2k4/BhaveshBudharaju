import React from "react";
import devhomePng from "../assets/images/devhome.png";
import { Link } from "react-scroll";

function Header() {
  return (
    <div className="p-5 bg-primary flex justify-between items-center">
      <h1 className="text-secondary text-2xl sm:text-xs font-semibold">
        <img src={devhomePng} alt="Bhav♡" className="h-12" />
      </h1>
      <div className="flex space-x-6 text-xl sm:text-xs font-semibold ">
        <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-teal-500 text-secondary">
          About Me😎
        </Link>
        <Link to="skill" smooth={true} duration={500} className="text-secondary cursor-pointer hover:text-teal-500">
          Skills💻
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={500}
          className="text-secondary cursor-pointer hover:text-teal-500"
        >
          Experience & Education🔖
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="text-secondary cursor-pointer hover:text-teal-500"
        >
          Projects🗄️
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="text-secondary cursor-pointer hover:text-teal-500"
        >
          Contact📞
        </Link>
      </div>
    </div>
  );
}

export default Header;