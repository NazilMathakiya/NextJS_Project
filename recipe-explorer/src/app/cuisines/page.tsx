
import Link from "next/link";
import { cuisines } from "../../data/recipes";

export default function CuisinesPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-8">
      <h1 className="text-2xl font-bold">Cuisines</h1>

      <ul className="mt-5 space-y-3">
        {cuisines.map((cuisine) => (
          <li key={cuisine.slug} className="border bg-white p-3">
            <Link
              href={`/cuisines/${cuisine.slug}`}
              className="text-blue-700 hover:underline"
            >
              {cuisine.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
