import liamgrossman from "/liam_grossman.jpg";

export default function Header() {
  return (
    <header className="space-x-3 flex items-center mt-10">
      <img
        src={liamgrossman}
        alt="Liam Grossman"
        className="h-10 w-10 rounded-full"
      />
      <h2 className="font-bold text-xl">Liam Grossman</h2>
    </header>
  );
}
