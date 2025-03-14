import { Book, Code } from "~/components/Icons";
import Service from "~/components/Service";

export default function AboutMePage() {
  return (
    <section>
      <h1 className="font-bold text-lg px-5 pt-5">About Me</h1>
      <Service
        name="Software Consultation"
        description="Help on artitecting software and design descisions."
        Icon={Code}
      />
      <Service
        name="One-on-one Lessons"
        description="Learn a new technology with my help."
        Icon={Book}
      />
    </section>
  );
}
