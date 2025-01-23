interface ServiceProps {
  name: string;
  description: string;
  Icon: ({ props }: any) => React.ReactElement;
}

export default function Service({ name, description, Icon }: ServiceProps) {
  return (
    <div className="space-y-2 p-5 border-b last:border-b-0 flex flex-col">
      <div className="space-x-2 flex items-center">
        <Icon className="h-5 w-5" />
        <h2 className="font-medium">{name}</h2>
      </div>
      <p>{description}</p>
      <a href="mailto:me@liamgrossman.com">
        <button className="h-7 text-sm bg-blue-600 text-white px-3 rounded-full">
          Inquire Interest
        </button>
      </a>
    </div>
  );
}
