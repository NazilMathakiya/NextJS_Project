
"use client";

import { useState } from "react";
import RecipeCard from "../../components/RecipeCard";
import { recipes, categories } from "../../data/recipes";

export default function RecipesPage() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesCategory =
      category === "All" || recipe.category === category;

    const matchesSearch = recipe.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="mx-auto max-w-5xl px-5 py-8">
      <h1 className="text-2xl font-bold">All Recipes</h1>

      <input
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className="mt-4 w-full max-w-sm border bg-white px-3 py-2"
      />

      <div className="my-5 flex flex-wrap gap-2">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`border px-3 py-2 text-sm ${
              category === item
                ? "bg-gray-200 font-semibold"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <p className="mb-4 text-sm text-gray-600">
        Showing {filteredRecipes.length} recipes
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.slug} recipe={recipe} />
        ))}
      </div>

      {filteredRecipes.length === 0 && (
        <p className="mt-4">No recipes found.</p>
      )}
    </main>
  );
}
