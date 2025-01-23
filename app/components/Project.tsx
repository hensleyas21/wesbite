interface IProjectProps {
  name: string;
  description: string;
  github: string;
}

export default function Project(props: IProjectProps) {
  const { name, description, github } = props;
  return (
    <div className="p-5 border-b flex flex-row justify-between items-center space-x-5  last:border-b-0">
      <a href={github} target="_blank" rel="noopener noreferrer">
        <div className="space-y-2 w-full">
          <h2 className="font-medium">{name}</h2>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}
