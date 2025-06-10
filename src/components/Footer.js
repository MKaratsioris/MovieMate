import { Link } from "react-router-dom";
import LogoImg from "../assets/favicon.ico";

export const Footer = () => {
  return (
    <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-center dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <Link to="/" className="flex items-center">
          <img src={LogoImg} className="mr-2 h-8 sm:h-9" alt="CineFriend Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            CineFriend
          </span>
        </Link>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="mr-4 hover:underline md:mr-6"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/MKaratsioris"
              target="_blank"
              className="hover:underline"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
