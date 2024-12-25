import Experience from "~/components/Experience";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Project from "~/components/Project";
import { LINKS } from "~/constants/links";

export default function Index() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="max-w-screen-md mx-auto px-7 mb-7 flex-grow flex flex-col">
        <div className="space-y-7">
          <div className="space-y-3">
            <Header />
            <p>
              Hi, I'm Liam. I am a senior Computer Science and Data Science
              student at{" "}
              <a href={LINKS.GCC} target="_blank" rel="noopener noreferrer">
                <span className="text-blue-600 hover:text-blue-800">
                  Grove City College.
                </span>
              </a>
            </p>
          </div>
          <section id="experience" className="space-y-3">
            <h2 className="font-bold">Experience</h2>
            <Experience
              company="Intapp"
              position="Fullstack Software Engineer Intern"
              description="Returning internship. Collaborated with an agile senior engineering team to redesign Intapp's Time product."
              linkedin={LINKS.LINKEDIN_INTAPP}
            />
            <Experience
              company="Intapp"
              position="Fullstack Software Engineer Intern"
              description="Rebuilt an compliance rules engine from Java to .NET to ensure a lawyer's time entries comply with terms derived from client contracts."
              linkedin={LINKS.LINKEDIN_INTAPP}
            />
            <Experience
              company="Behaivior"
              position="Software Engineer Intern"
              description="Worked with an agile engineering and AI team developing vital informatics, dashboards, health estimate algorithms, and integration/unit testing."
              linkedin={LINKS.LINKEDIN_BEHAIVIOR}
            />
          </section>
          <section id="projects" className="space-y-3">
            <h2 className="font-bold">Projects</h2>
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
        </div>
      </div>
      <Footer />
    </main>
  );
}
