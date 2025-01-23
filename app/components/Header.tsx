import { Link, useLocation } from "@remix-run/react";
import { LINKS } from "~/constants/links";
import { GitHub, Linkedin } from "./Icons";

export default function Hero() {
  const location = useLocation(); // Get the current path

  return (
    <aside className="flex flex-col md:justify-between h-full space-y-7 px-5 md:pb-7 pb-5 md:border-b-0 border-b">
      <div className="space-y-5">
        <div>
          <img
            src="/liam_grossman.jpg"
            className="w-28 h-28 rounded-full mb-5"
          />
          <h1 className="text-lg font-bold mb-3">👋 Hi, I'm Liam!</h1>
          <p>
            I'm a senior Computer Science and Data Science student at{" "}
            <a href={LINKS.GCC} target="_blank" rel="noopener noreferrer">
              <span className="text-blue-600 hover:text-blue-800">
                Grove City College.
              </span>
            </a>
          </p>
        </div>
        <div className="flex flex-col space-y-3">
          <Link to="/">
            <span
              className={`font-medium ${
                location.pathname === "/"
                  ? "underline decoration-blue-600 decoration-2"
                  : ""
              }`}
            >
              Experience
            </span>
          </Link>
          <Link to="/projects">
            <span
              className={`font-medium ${
                location.pathname === "/projects"
                  ? "underline decoration-blue-600 decoration-2"
                  : ""
              }`}
            >
              Projects
            </span>
          </Link>
          <Link to="/services">
            <span
              className={`font-medium ${
                location.pathname === "/services"
                  ? "underline decoration-blue-600 decoration-2"
                  : ""
              }`}
            >
              Services
            </span>
          </Link>
        </div>
      </div>
      <div className="flex space-x-3">
        <a
          href="https://linkedin/in/liam-grossman"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="https://github.com/LGmatrix13"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub className="w-5 h-5" />
        </a>
      </div>
    </aside>
  );
}
