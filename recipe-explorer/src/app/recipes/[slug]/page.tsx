import Link from "next/link";
import { notFound } from "next/navigation";
import { recipes } from "../../../data/recipes";

export function generateStaticParams() {
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }));
}

export default async function RecipeDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recipe = recipes.find((item) => item.slug === slug);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <Link
        href="/recipes"
        className="text-sm text-blue-600 hover:underline"
      >
        ← Back to recipes
      </Link>

      <p className="mt-6 text-sm text-gray-500">
        Recipes / {recipe.category} / {recipe.name}
      </p>

      <h1 className="mt-3 text-3xl font-bold text-gray-900">
        {recipe.name}
      </h1>

      <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
        <p>Category: {recipe.category}</p>
        <p>Cuisine: {recipe.cuisine}</p>
        <p>Time: {recipe.time}</p>
        <p>Difficulty: {recipe.difficulty}</p>
      </div>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Ingredients
        </h2>

        <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </section>

      <section className="mt-6 rounded-lg border border-gray-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Instructions
        </h2>

        <ol className="mt-4 list-decimal space-y-3 pl-5 text-gray-700">
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </section>
    </main>
  );
}