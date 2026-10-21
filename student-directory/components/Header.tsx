import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href="/students"
          className="text-xl font-bold text-blue-700"
        >
          Student Directory
        </Link>

        <nav className="flex gap-5 text-sm">
          <Link href="/students" className="hover:text-blue-700">
            Students
          </Link>

          <Link href="/departments" className="hover:text-blue-700">
            Departments
          </Link>
        </nav>
      </div>
    </header>
  );
}