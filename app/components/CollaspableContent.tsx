import { useState } from "react";
import { ChevronDown } from "./Icons";

interface ICollaspableContentProps {
  title: string;
  id: string;
  children: React.ReactNode;
}

export default function CollaspableContent(props: ICollaspableContentProps) {
  const { title, id, children } = props;
  const [collapsed, setCollapsed] = useState(false);

  function toggleCollapse() {
    setCollapsed(!collapsed);
  }

  return (
    <section className="space-y-3" id={id}>
      <div className="flex flex-row justify-between items-center">
        <h2 className="font-bold">{title}</h2>
        <button onClick={toggleCollapse}>
          <ChevronDown
            className={`${
              collapsed ? "rotate-180" : ""
            } transition-all ease-in-out duration-200 w-5 h-5`}
          />
        </button>
      </div>
      {!collapsed && children}
    </section>
  );
}
