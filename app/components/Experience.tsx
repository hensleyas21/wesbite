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
        <div className="space-y-1">
          <h2 className="font-medium">{company}</h2>
          <h3 className="font-medium text-sm">{position}</h3>
        </div>
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
