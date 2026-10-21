import StudentCard from "../../components/StudentCard";
import { students } from "../../data/students";

export default function StudentsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
        Campus Directory
      </p>

      <h1 className="mt-2 text-3xl font-bold">Students</h1>

      <p className="mt-2 text-gray-500">
        Browse students and view their academic details.
      </p>

      <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </main>
  );
}