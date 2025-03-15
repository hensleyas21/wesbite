import { Link, useLocation } from "@remix-run/react";
import { LINKS } from "~/constants/links";
import { Email, GitHub, Linkedin, Resume } from "./Icons";

export default function Hero() {
  const location = useLocation(); // Get the current path

  return (
    <aside className="flex flex-col md:justify-between h-full space-y-7 px-5 md:pb-7 pb-5 md:border-b-0 border-b">
      <div className="space-y-5">
        <div>
          <img
            src="/austin_hensley.png"
            className="w-28 h-28 rounded-full mb-5"
          />
          <h1 className="text-lg font-bold mb-3">Hi, I'm Austin Hensley!</h1>
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
        <Link to="/about-me">
            <span
              className={`font-medium ${
                location.pathname === "/about-me"
                  ? "underline decoration-blue-600 decoration-2"
                  : ""
              }`}
            >
              About Me
            </span>
          </Link>
          <Link to="/experience">
            <span
              className={`font-medium ${
                location.pathname === "/experience"
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
          <Link to="/certifications">
            <span
              className={`font-medium ${
                location.pathname === "/certifications"
                  ? "underline decoration-blue-600 decoration-2"
                  : ""
              }`}
            >
              Certifications
            </span>
          </Link>
        </div>
      </div>
      <div className="flex space-x-3">
        <a href={LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href={LINKS.GITHUB} target="_blank" rel="noopener noreferrer">
          <GitHub className="w-5 h-5" />
        </a>
        <a href={LINKS.RESUME} target="_blank" rel="noopener noreferrer">
          <Resume className="w-5 h-5" />
        </a>
        <a href={LINKS.EMAIL} target="_blank" rel="noopener noreferrer">
          <Email className="w-5 h-5" />
        </a>
      </div>
    </aside>
  );
}
