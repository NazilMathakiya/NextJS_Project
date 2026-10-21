
import Link from "next/link";
import { notFound } from "next/navigation";
import { students } from "../../../data/students";

export function generateStaticParams() {
  return students.map((student) => ({
    id: student.id,
  }));
}

export default async function StudentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const student = students.find((item) => item.id === id);

  if (!student) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-5 py-10">
      <Link
        href="/students"
        className="text-blue-700 hover:underline"
      >
        Back to students
      </Link>

      <div className="mt-6 border bg-white p-6">
        <h1 className="text-2xl font-bold">{student.name}</h1>

        <h2 className="mt-8 border-b pb-2 text-lg font-bold">
          Student Details
        </h2>

        <div className="mt-4 space-y-4">
          <p>
            <span className="text-gray-500">Student ID: </span>
            {student.id}
          </p>

          <p>
            <span className="text-gray-500">Department: </span>
            {student.department}
          </p>

          <p>
            <span className="text-gray-500">Year: </span>
            {student.year}
          </p>

          <p>
            <span className="text-gray-500">Email: </span>
            {student.email}
          </p>
        </div>
      </div>
    </main>
  );
}
