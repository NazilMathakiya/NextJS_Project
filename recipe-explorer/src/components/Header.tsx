
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b bg-white">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center gap-6 px-5 py-4">
        <Link href="/recipes" className="font-bold">
          Recipe Explorer
        </Link>

        <Link href="/recipes" className="hover:underline">
          Recipes
        </Link>

        <Link href="/cuisines" className="hover:underline">
          Cuisines
        </Link>
      </nav>
    </header>
  );
}
