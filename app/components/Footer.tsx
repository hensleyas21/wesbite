import { LINKS } from "~/constants/links";

export default function Footer() {
  return (
    <div className="justify-center text-gray-500 space-x-3 flex ease-in-out mb-7">
      <a href={LINKS.GITHUB} target="_blank" rel="noopener noreferrer">
        <p className="hover:text-gray-800">GitHub</p>
      </a>
      <a href={LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer">
        <p className="hover:text-gray-800">LinkedIn</p>
      </a>
      <a href={LINKS.RESUME} target="_blank" rel="noopener noreferrer">
        <p className="hover:text-gray-800">Résumé</p>
      </a>
      <a href={LINKS.EMAIL}>
        <p className="hover:text-gray-800">Email</p>
      </a>
    </div>
  );
}
