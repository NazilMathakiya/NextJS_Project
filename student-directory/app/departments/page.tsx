import Link from "next/link";
import { departments } from "../../data/students";

export default function DepartmentsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <h1 className="text-3xl font-bold">Departments</h1>

      <p className="mt-2 text-gray-500">
        Explore our academic departments.
      </p>

      <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {departments.map((department) => (
          <div
            key={department.slug}
            className="rounded-lg border bg-white p-5"
          >
            <h2 className="text-lg font-bold">{department.name}</h2>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              {department.description}
            </p>

            <Link
              href={`/departments/${department.slug}`}
              className="mt-4 inline-block text-sm font-semibold text-blue-700 hover:underline"
            >
              View department →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}