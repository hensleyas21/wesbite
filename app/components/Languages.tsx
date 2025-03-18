export interface LanguagesProps {
  languages: {
    name: string;
    color: string;
    weight: number;
  }[];
}

export default function Languages(props: LanguagesProps) {
  const { languages } = props;
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex w-full h-2 rounded-full overflow-hidden">
        {languages.map((language) => (
          <div
            style={{
              width: `${language.weight}%`,
              backgroundColor: language.color,
            }}
          />
        ))}
      </div>
      <div className="flex space-x-3">
        {languages.map((language) => (
          <div className="space-x-2 flex flex-row items-center text-sm">
            <div
              className="rounded-full h-2 w-2"
              style={{
                backgroundColor: language.color,
              }}
            />
            <span>{language.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
