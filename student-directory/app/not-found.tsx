import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-20 text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>

      <p className="mt-3 text-gray-500">
        Sorry, the student or department you requested does not exist.
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <Link
          href="/students"
          className="rounded-md bg-blue-700 px-4 py-2 text-white hover:bg-blue-800"
        >
          Student Directory
        </Link>

        <Link
          href="/departments"
          className="rounded-md border bg-white px-4 py-2 hover:bg-gray-50"
        >
          Departments
        </Link>
      </div>
    </main>
  );
}