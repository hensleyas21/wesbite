import { MetaFunction } from "@remix-run/react";
import Project from "~/components/Project";
import { LINKS } from "~/constants/links";

export const meta: MetaFunction = () => {
  return [
    { title: "Austin Hensley - Projects" },
    { name: "Austin Hensley - Projects", content: "Projects" },
  ];
};

export default function ProjectsPage() {
  return (
    <section id="projects">
      <h2 className="font-bold text-lg px-5 pt-5">Projects</h2>
      <Project
        name="Hymn Together"
        description="Native iOS app for listening, sharing, and saving hymns."
        github={LINKS.GITHUB_HYMN_TOGETHER}
        languages={[
          {
            name: "Swift",
            percentage: 100,
            color: "#f05138",
          },
        ]}
      />
      <Project
        name="Padlock"
        description="End-to-end password communication tool."
        github={LINKS.GITHUB_PADLOCK}
        languages={[
          {
            name: "Python",
            percentage: 50.1,
            color: "#3572a5",
          },
          {
            name: "CSS",
            percentage: 28.0,
            color: "#663399",
          },
          {
            name: "HTML",
            percentage: 21.2,
            color: "#e34c26",
          },
          {
            name: "JS",
            percentage: 0.7,
            color: "#f1e05a",
          },
        ]}
      />
      <Project
        name="Study Buddy"
        description="Native android app for generating flashcards with AI for busy students."
        github={LINKS.GITHUB_STUDDY_BUDDY}
        languages={[
          {
            name: "Kotlin",
            percentage: 100,
            color: "#A97BFF",
          },
        ]}
      />
      <Project
        name="Narro"
        description="Fullstack web application for AI generated madlibs."
        github={LINKS.GITHUB_NARRO}
        languages={[
          {
            name: "Python",
            percentage: 47.4,
            color: "#3572a5",
          },
          {
            name: "HTML",
            percentage: 42.5,
            color: "#e34c26",
          },
          {
            name: "JS",
            percentage: 10.1,
            color: "#f1e05a",
          },
        ]}
      />
      <Project
        name="Hypur"
        description="JavaScript package to bring flexible reactivity to server-side applications."
        github={LINKS.GITHUB_HYPUR}
        languages={[
          {
            name: "TypeScript",
            percentage: 69.4,
            color: "#3178c6",
          },
          {
            name: "JS",
            percentage: 28.5 + 2.1,
            color: "#f1e05a",
          },
        ]}
      />
    </section>
  );
}
