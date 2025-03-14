import { Book, Code } from "~/components/Icons";
import Service from "~/components/Service";

export default function CertificationsPage() {
  return (
    <section>
      <h1 className="font-bold text-lg px-5 pt-5">Certifications</h1>
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
