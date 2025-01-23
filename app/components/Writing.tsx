interface WritingProps {
  title: string;
  description: string;
}

export default function Writing({ title, description }: WritingProps) {
  return (
    <div className="space-y-2 p-5 border-b last:border-b-0">
      <h2 className="font-medium">{title}</h2>
      <p>{description}</p>
    </div>
  );
}
