interface IExperienceProps {
  company: string;
  position: string;
  description: string;
  linkedin?: string;
}

export default function Experience(props: IExperienceProps) {
  const { company, position, description } = props;
  return (
    <div className="space-y-2">
      <h3 className="font-medium">
        {position}, {company}
      </h3>
      <p>{description}</p>
    </div>
  );
}
