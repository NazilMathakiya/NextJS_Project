import Link from "next/link";
import { notFound } from "next/navigation";
import StudentCard from "../../../components/StudentCard";
import { departments, students } from "../../../data/students";

export function generateStaticParams() {
  return departments.map((department) => ({
    slug: department.slug,
  }));
}

export default async function DepartmentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const department = departments.find((item) => item.slug === slug);

  if (!department) {
    notFound();
  }

  const departmentStudents = students.filter(
    (student) => student.slug === slug
  );

  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <Link href="/departments" className="text-blue-700 hover:underline">
        ← Back to departments
      </Link>

      <div className="mt-6 rounded-lg border bg-white p-6">
        <h1 className="text-2xl font-bold">{department.name}</h1>

        <p className="mt-3 text-gray-500">{department.description}</p>
      </div>

      <h2 className="mt-8 text-xl font-bold">
        Students in this department
      </h2>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {departmentStudents.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>

      {departmentStudents.length === 0 && (
        <p className="mt-4 text-gray-500">
          No students are listed in this department.
        </p>
      )}
    </main>
  );
}