import Languages from "./Languages";

interface IProjectProps {
  name: string;
  description: string;
  github?: string;
  languages: {
    name: string;
    weight: number;
  }[];
}

export default function Project(props: IProjectProps) {
  const { name, description, github, languages } = props;
  if (github) {
    return (
      <div className="p-5 border-b flex flex-col space-y-3 last:border-b-0">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <div className="space-y-2 w-full">
            <h2 className="font-medium">{name}</h2>
            <p>{description}</p>
          </div>
          <Languages languages={languages} />
        </a> 
      </div>
    );
  }
  return (
    <div className="p-5 border-b flex flex-col space-y-3 last:border-b-0">
        <div className="space-y-2 w-full">
          <h2 className="font-medium">{name}</h2>
          <p>{description}</p>
        </div>
        <Languages languages={languages} />
    </div>
  );
}
