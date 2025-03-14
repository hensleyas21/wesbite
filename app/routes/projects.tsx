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
        name="Vivo"
        description="A mobile-first web application for residence life reporting and staff management. Built for Grove City College's Residence Life department."
        languages={[
          {
            name: "TypeScript",
            percentage: 98.9,
            color: "#3178c6",
          },
          {
            name: "Other",
            percentage: 1.1,
            color: "#ededed",
          }
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
        name="Scheduling App"
        description="Developed a course scheduling app in Java using Agile methodology, featuring an advanced heuristic-based search system for efficient data navigation."
        github={LINKS.GITHUB_GCC_SCHEDULER}
        languages={[
          {
            name: "Java",
            percentage: 100,
            color: "#b07219",
          },
        ]}
      />
      <Project
        name="NFL Play Predictor"
        description="Anaylzed a variety of data from the NFL to create a model to predict future plays."
        github={LINKS.GITHUB_NFL_PLAY_PREDICTOR}
        languages={[
          {
            name: "Jupyter Notebook",
            percentage: 82.4,
            color: "#da5b0b",
          },
          {
            name: "Python",
            percentage: 17.6,
            color: "#3572a5",
          },
        ]}
      />
      <Project
        name="Longest Increasing Subsequence"
        description="Investigated longest increasing subsequence algorithms, optimizing binary search for edge cases and reconstructing the sequences."
        github={LINKS.GITHUB_LIS}
        languages={[
          {
            name: "Python",
            percentage: 100,
            color: "#3572a5",
          },
        ]}
      />
    </section>
  );
}
