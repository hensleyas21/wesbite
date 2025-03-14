import Experience from "~/components/Experience";

export default function ExperiencePage() {
  return (
    <section id="experience">
      <h2 className="font-bold text-lg px-5 pt-5">Experience</h2>
      <Experience
        company="Intapp"
        position="Fullstack Software Engineer Intern"
        description="Returning internship. Collaborated with an agile senior engineering team to redesign Intapp's Time product."
      />
      <Experience
        company="Intapp"
        position="Fullstack Software Engineer Intern"
        description="Rebuilt an compliance rules engine from Java to .NET to ensure a lawyer's time entries comply with terms derived from client contracts."
      />
      <Experience
        company="Behaivior"
        position="Software Engineer Intern"
        description="Worked with an agile engineering and AI team developing vital informatics, dashboards, health estimate algorithms, and integration/unit testing."
      />
    </section>
  );
}
