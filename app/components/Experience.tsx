interface IExperienceProps {
  company: string;
  position: string;
  description: string;
}

export default function Experience({
  company,
  position,
  description,
}: IExperienceProps) {
  return (
    <div className="p-5 border-b last:border-b-0 flex flex-row justify-between items-center space-x-5">
      <div className="space-y-2">
        <div className="space-y-1">
          <h2 className="font-medium">{company}</h2>
          <h3 className="font-medium text-sm">{position}</h3>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}
