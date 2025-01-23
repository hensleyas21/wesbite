import Project from "~/components/Project";
import { LINKS } from "~/constants/links";

export default function ProjectsPage() {
  return (
    <section id="projects">
      <h2 className="font-bold text-lg px-5 pt-5">Projects</h2>
      <Project
        name="Hymn Together"
        description="Native iOS app for listening, sharing, and saving hymns."
        github={LINKS.GITHUB_HYMN_TOGETHER}
      />
      <Project
        name="Padlock"
        description="End-to-end password communication tool."
        github={LINKS.GITHUB_PADLOCK}
      />
      <Project
        name="Study Buddy"
        description="Native android app for generating flashcards with AI for busy students."
        github={LINKS.GITHUB_STUDDY_BUDDY}
      />
      <Project
        name="Narro"
        description="Fullstack web application for AI generated madlibs."
        github={LINKS.GITHUB_NARRO}
      />
      <Project
        name="Hypur"
        description="JavaScript package to bring flexible reactivity to server-side applications."
        github={LINKS.GITHUB_HYPUR}
      />
    </section>
  );
}
