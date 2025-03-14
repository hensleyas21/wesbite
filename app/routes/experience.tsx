import { MetaFunction } from "@remix-run/react";
import Experience from "~/components/Experience";
import { LINKS } from "~/constants/links";

export const meta: MetaFunction = () => {
  return [
    { title: "Austin Hensley - Experience" },
    { name: "Austin Hensley - Experience", content: "Experience" },
  ];
};

export default function ExperiencePage() {
  return (
    <section id="experience">
      <h2 className="font-bold text-lg px-5 pt-5">Experience</h2>
      <Experience
        company="Arcfield"
        company_link={LINKS.ARCFIELD}
        position="Engineering Intern"
        description="Worked on a team of six interns to create a multi-cloud failover system using AWS, Azure, and GCP."
      />
      <Experience
        company="Leidos"
        company_link={LINKS.LEIDOS}
        position="ServiceNow Developer Intern"
        description="Built and optimized a self-service platform with automation, smooth user experience, and clear, effective UIs."
      />
      <Experience
        company="Grove City College"
        company_link={LINKS.GCC}
        position="Student Grader"
        description="Graded assignments for Data Structures & Algorithms, Calculus I, and Calculus II."
      />
    </section>
  );
}
