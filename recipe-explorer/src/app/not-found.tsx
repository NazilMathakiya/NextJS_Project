
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 text-center">
      <h1 className="text-2xl font-bold">Page not found</h1>

      <p className="mt-3">
        Sorry, this recipe or cuisine does not exist.
      </p>

      <Link
        href="/recipes"
        className="mt-5 inline-block text-blue-700 underline"
      >
        Back to recipes
      </Link>
    </main>
  );
}
