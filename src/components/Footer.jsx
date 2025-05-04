import { AiOutlineLink, AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import zeusLogo from "../components/zeusLogo.jpg";
import profile from "./About/profile3.jpg"; 

export const Footer = () => {
  return (
    <footer className="p-4 bg-black rounded-lg shadow md:px-6 md:py-8 mt-3">
       <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center mb-4 sm:mb-0">
          <img src={profile} className="h-8 mr-3" alt="Profile" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Swati Gupta
          </span>
        </div>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0 dark:text-white ">
          <li>
            <a
              href="https://gitlab.com/swatigupta2225/swati-portfolio"
              target="_blank"
              className="mr-4 hover:underline md:mr-6 text-white"
            >
              Github Repo
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/swati-gupta-422332218/"
              target="_blank"
              className="mr-4 hover:underline md:mr-6 text-white"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Swatigupta2019"
              target="_blank"
              className="mr-4 hover:underline md:mr-6 text-white"
            >
              Github
            </a>
          </li>
          <li>
            
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        "First we Vibe."
      </span>
    </footer>
  );
};