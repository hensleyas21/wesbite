import { MetaFunction } from "@remix-run/react";
import { Book, Code } from "~/components/Icons";
import Service from "~/components/Service";

export const meta: MetaFunction = () => {
  return [
    { title: "Austin Hensley - About Me" },
    { name: "Austin Hensley - About Me", content: "About Me" },
  ];
};

export default function AboutMePage() {
  return (
    <section>
      <h1 className="font-bold text-lg px-5 pt-5">About Me</h1>
      <div className="text-md px-5 pt-5">
        <p>I am a senior at Grove City College, pursuing a double major in Computer Science and Data Science. I have passion for problem solving, learning new technologies, and collaborating with others to achieve goals. I have experience working with Java, Python, C, JavaScript, SQL, and a variety of other technologies.</p>
        <br></br>
        <p>My love for computer science began my freshman year of high school. I enrolled in my first programming class and I was instantly hooked. I was amazed at how a handful of variables and methods could come together to create powerful problem-solving tools. While in high school, I had the opportunity to take six computer science courses allowing me to earn a Database Specialist certificate from Northern Virginia Community College.</p>
        <br></br>
        <p>At Grove City College, I've had the opportunity to expand my skillset through a variety of classes and clubs. Some of my favorite classes have been Data Structures & Algorithms, Intro to Artificial Intelligence, and Ethics. I've also been involved in many organizations throughout campus, including Residence Life, Orientation Board, and intramural sports. During my time at Grove City, I've been able to gain hands-on experience in data analysis, cloud computing, and project lifecycles through internships with government contractors Leidos and Arcfield.</p>
      </div>
    </section>
  );
}
