
import Link from "next/link";
import { notFound } from "next/navigation";
import RecipeCard from "../../../components/RecipeCard";
import { recipes, cuisines } from "../../../data/recipes";

export function generateStaticParams() {
  return cuisines.map((cuisine) => ({
    cuisine: cuisine.slug,
  }));
}

export default async function CuisinePage({
  params,
}: {
  params: Promise<{ cuisine: string }>;
}) {
  const { cuisine } = await params;

  const selectedCuisine = cuisines.find(
    (item) => item.slug === cuisine
  );

  if (!selectedCuisine) {
    notFound();
  }

  const cuisineRecipes = recipes.filter(
    (recipe) => recipe.cuisineSlug === cuisine
  );

  return (
    <main className="mx-auto max-w-5xl px-5 py-8">
      <Link href="/cuisines" className="text-blue-700 hover:underline">
        ← Back to cuisines
      </Link>

      <h1 className="mt-5 text-2xl font-bold">
        {selectedCuisine.name}
      </h1>

      <p className="mt-2 text-sm text-gray-600">
        Showing {cuisineRecipes.length} recipes
      </p>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cuisineRecipes.map((recipe) => (
          <RecipeCard key={recipe.slug} recipe={recipe} />
        ))}
      </div>

      {cuisineRecipes.length === 0 && (
        <p className="mt-4">No recipes in this cuisine.</p>
      )}
    </main>
  );
}
