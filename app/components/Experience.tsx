import { GitHub, Linkedin } from "./Icons";

interface IExperienceProps {
  company: string;
  position: string;
  description: string;
  linkedin?: string;
}

export default function Experience(props: IExperienceProps) {
  const { company, position, description, linkedin } = props;
  return (
    <div className="flex flex-row justify-between items-center group space-x-3">
      <div className="space-y-2">
        <h2 className="font-medium">
          {position}, {company}
        </h2>
        <p>{description}</p>
      </div>
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <Linkedin className="group-hover:opacity-100 opacity-0 w-5 h-5 transition-opacity" />
        </a>
      )}
    </div>
  );
}
