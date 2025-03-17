import { MetaFunction } from "@remix-run/react";
import { AWS, Database } from "~/components/Icons";
import Certification from "~/components/Certification";

export const meta: MetaFunction = () => {
  return [
    { title: "Austin Hensley - Certifications" },
    { name: "Austin Hensley - Certifications", content: "Certifications" },
  ];
};

export default function CertificationsPage() {
  return (
    <section>
      <h1 className="font-bold text-lg px-5 pt-5">Certifications</h1>
      <Certification
        name="AWS Certified Cloud Practitioner"
        description="Demonstrated foundational expertise in AWS Cloud services, security, pricing, and best practices."
        Icon={AWS}
      />
      <Certification
        name="Database Specialist"
        description="Earned certificate through dual enrollment at Northern Virginia Community College while in high school."
        Icon={Database}
      />
    </section>
  );
}
