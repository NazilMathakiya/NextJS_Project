
import Link from "next/link";

type Recipe = {
  id: string;
  slug: string;
  name: string;
  category: string;
  cuisine: string;
  cuisineSlug: string;
  time: number;
  difficulty: string;
};

export default function RecipeCard({
  recipe,
}: {
  recipe: Recipe;
}) {
  return (
    <div className="border bg-white p-4">
      <p className="text-sm text-gray-500">{recipe.id}</p>

      <h2 className="mt-2 text-lg font-semibold">{recipe.name}</h2>

      <p className="mt-2 text-sm">{recipe.category}</p>

      <p className="mt-1 text-sm text-gray-600">
        {recipe.time} minutes · {recipe.difficulty}
      </p>

      <Link
        href={`/recipes/${recipe.slug}`}
        className="mt-3 inline-block text-blue-700 hover:underline"
      >
        View recipe →
      </Link>
    </div>
  );
}
