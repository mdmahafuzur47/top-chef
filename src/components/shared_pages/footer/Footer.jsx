import React from "react";
import { NavLink } from "react-router-dom";
import img from '../../../assets/footer/footerbg.jpg'
import { FaFacebook,FaTwitter,FaGooglePlusG,FaInstagram,FaGithubSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "40vh",
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.8)),url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundBlendMode: "darken",
      }}
    >
      <div className=" text-white text-center p-3">
        <ul className="flex flex-wrap gap-4 text-[24px] font-medium justify-center py-12">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-[#34BF49]" : ""
            }
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to={"/blog"}
            className={({ isActive }) =>
              isActive ? "text-[#34BF49]" : ""
            }
          >
            <li>Blog</li>
          </NavLink>
          <NavLink>
            <li>About Us</li>
          </NavLink>
          <NavLink>
            <li>Contact Us</li>
          </NavLink>
        </ul>
        <h1 className="text-5xl font-bold italic text-[#34BF49] mb-10">
          Top$
          <span className="text-4xl font-semibold italic -p-2">Chefs</span>
        </h1>
        <div className="mb-5 flex flex-wrap justify-center gap-10 text-3xl md:text-5xl ">
            <span className="opacity-70 hover:opacity-100"><FaFacebook /></span>
            <span className="opacity-70 hover:opacity-100"><FaTwitter /></span>
            <span className="opacity-70 hover:opacity-100"><FaGooglePlusG /></span>
            <span className="opacity-70 hover:opacity-100"><FaGithubSquare /></span>
            <span className="opacity-70 hover:opacity-100"><FaInstagram /></span>
        </div>
        <p className="p-5 text-[18px] font-medium">&copy; All Rights Reserved by Maufz. I Made with &#10084; in 2023</p>
      </div>
    </div>
  );
};

export default Footer;
