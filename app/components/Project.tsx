import { GitHub } from "./Icons";

interface IProjectProps {
  name: string;
  description: string;
  github?: string;
}

export default function Project(props: IProjectProps) {
  const { name, description, github } = props;
  return (
    <div className="flex flex-row justify-between items-center space-x-5">
      <div className="space-y-2">
        <h2 className="font-medium">{name}</h2>
        <p>{description}</p>
      </div>
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer">
          <GitHub className="w-5 h-5 transition-opacity" />
        </a>
      )}
    </div>
  );
}
