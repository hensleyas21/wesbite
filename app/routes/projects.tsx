import { MetaFunction, useLoaderData } from "@remix-run/react";
import { getLanguagesGitHub } from "repositories/projects/languages";
import Project from "~/components/Project";
import { LINKS } from "~/constants/links";

export const meta: MetaFunction = () => {
  return [
    { title: "Austin Hensley - Projects" },
    { name: "Austin Hensley - Projects", content: "Projects" },
  ];
};

export async function loader() {
  const [languages] = await Promise.all([
    getLanguagesGitHub([
      LINKS.GITHUB_NFL_PLAY_PREDICTOR,
      LINKS.GITHUB_PADLOCK,
      LINKS.GITHUB_GCC_SCHEDULER,
      LINKS.GITHUB_LIS
    ])
  ]);
  return {
    languages
  };
}

export default function ProjectsPage() {
  const data = useLoaderData<typeof loader>();
  return (
    <section id="projects">
      <h2 className="font-bold text-lg px-5 pt-5">Projects</h2>
      <Project
        name="Vivo"
        description="A mobile-first web application for residence life reporting and staff management. Built for Grove City College's Residence Life department."
        languages={[
          {
            name: "TypeScript",
            weight: 98.9,
          },
          {
            name: "Other",
            weight: 1.1,
          }
        ]}
      />
      <Project
        name="Padlock"
        description="End-to-end password communication tool."
        github={LINKS.GITHUB_PADLOCK}
        languages={data.languages[LINKS.GITHUB_PADLOCK]}
      />
      <Project
        name="Scheduling App"
        description="Developed a course scheduling app in Java using Agile methodology, featuring an advanced heuristic-based search system for efficient data navigation."
        github={LINKS.GITHUB_GCC_SCHEDULER}
        languages={data.languages[LINKS.GITHUB_GCC_SCHEDULER]}
      />
      <Project
        name="NFL Play Predictor"
        description="Anaylzed a variety of data from the NFL to create a model to predict future plays."
        github={LINKS.GITHUB_NFL_PLAY_PREDICTOR}
        languages={data.languages[LINKS.GITHUB_NFL_PLAY_PREDICTOR]}
      />
      <Project
        name="Longest Increasing Subsequence"
        description="Investigated longest increasing subsequence algorithms, optimizing binary search for edge cases and reconstructing the sequences."
        github={LINKS.GITHUB_LIS}
        languages={data.languages[LINKS.GITHUB_LIS]}
      />
    </section>
  );
}
