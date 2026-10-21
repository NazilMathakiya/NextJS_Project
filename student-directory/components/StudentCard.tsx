
import Link from "next/link";

type Student = {
  id: string;
  name: string;
  department: string;
  slug: string;
  year: string;
  email: string;
};

export default function StudentCard({
  student,
}: {
  student: Student;
}) {
  return (
    <div className="rounded-lg border bg-white p-5">
      <h2 className="text-lg font-bold">{student.name}</h2>

      <p className="mt-2 text-sm text-gray-500">
        ID: {student.id}
      </p>

      <p className="mt-1 text-sm text-gray-500">
        Department: {student.department}
      </p>

      <p className="mt-1 text-sm text-gray-500">
        Year: {student.year}
      </p>

      <Link
        href={`/students/${student.id}`}
        className="mt-4 inline-block text-sm text-blue-700 hover:underline"
      >
        View profile
      </Link>
    </div>
  );
}
