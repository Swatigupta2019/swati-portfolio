import React from "react";

import profile from "./profile3.jpg";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { IconContext } from "react-icons";
import Skills from "../Skills";

const Hero = () => {
  return (
    <>
      <div name="home" className="h-screen w-full">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-denter h-full px-4 md:flex-row md:mt-1">
          <div className="flex flex-col justify-center h-full ">
            <h1 className="text-4xl sm:text-7xl font-bold text-white text-left">
              HELLO WORLD!
            </h1>
            <h1 className="text-4xl sm:text-7xl font-bold text-white text-left">
              I'm Swati Gupta.
            </h1>
            <p className="text-gray-500 py-4 max-w-md text-left">
               Computer Science Engineering Graduate with hands-on experience in web development, including proficiency in React, Next.js, and the MERN stack.
              I enjoy using my skills on real-world projects and freelancing, 
            </p>

            <div className="flex items-center space-x-3">
              <img
                className="rounded-full w-20 h-20 drop-shadow-2xl my-5"
                src={profile}
                alt="Profile"
              />
              <a href="mailto:Swatigupta2225@gmail.com">
                <p className="text-base text-gray-500">Swatigupta2225@gmail.com</p>
              </a>
            </div>

            <div className="grid gap-4 grid-cols-2 grid-rows-2 w-max mt-5 mb-44 ">
              <IconContext.Provider value={{ color: "white" }}>
                <div>
                  <a
                    className="flex items-center text-white"
                    href="https://github.com/Swatigupta2019" target="_blank"
                  >
                    <AiOutlineGithub />
                    &nbsp;&nbsp;&nbsp;Github
                  </a>
                </div>
                <div className="">
                  <a
                    className="flex items-center text-white" 
                    href="https://www.linkedin.com/in/swati-gupta-422332218/" target="_blank"
                  >
                    <AiOutlineLinkedin />
                    &nbsp;&nbsp;&nbsp;Linkedin
                  </a>
                </div>
                <div>
                  <a
                    className="flex items-center text-white"
                    href="https://x.com/gu73235209" target="_blank"
                  >
                    <AiOutlineTwitter />
                    &nbsp;&nbsp;&nbsp;Twitter
                  </a>
                </div>
                {/* <div>
                  <a
                    className="flex items-center text-white"
                    href="https://www.instagram.com/puneetchhabra07"
                  >
                    <AiOutlineInstagram />
                    &nbsp;&nbsp;&nbsp;Instagram
                  </a>
                </div> */}
              </IconContext.Provider>
            </div>
          </div>

          <div className="">
            <Skills className="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;