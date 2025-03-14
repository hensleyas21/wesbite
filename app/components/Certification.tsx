interface CertificationProps {
  name: string;
  description: string;
  Icon: ({ props }: any) => React.ReactElement;
}

export default function Certification({ name, description, Icon }: CertificationProps) {
  return (
    <div className="space-y-2 p-5 border-b last:border-b-0 flex flex-col">
      <div className="space-x-2 flex items-center">
        <Icon className="h-5 w-5" />
        <h2 className="font-medium">{name}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
}
