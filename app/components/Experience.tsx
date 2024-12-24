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
    <div className="flex flex-row justify-between items-center space-x-5">
      <div className="space-y-2">
        <h2 className="font-medium">
          {position}, {company}
        </h2>
        <p>{description}</p>
      </div>
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-5 h-5 transition-opacity" />
        </a>
      )}
    </div>
  );
}
