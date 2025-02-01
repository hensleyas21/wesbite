interface LanguagesProps {
  languages: {
    name: string;
    color: string;
    percentage: number;
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
              width: `${language.percentage}%`,
              backgroundColor: language.color,
            }}
          />
        ))}
      </div>
      <div className="flex space-x-3">
        {languages.map((language) => (
          <div className="space-x-2 flex items-center text-sm">
            <div
              className="rounded-full h-2 w-2"
              style={{
                backgroundColor: language.color,
              }}
            />
            <span>
              {language.name}{" "}
              <span className="text-slate-500">{language.percentage}%</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
