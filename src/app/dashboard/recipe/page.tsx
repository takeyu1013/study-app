import { RecipeFormExperimental } from "@/app/dashboard/recipe/action";

import { RecipeForm } from "./form";

export default function Page() {
  return (
    <div>
      <RecipeForm />
      <RecipeFormExperimental />
    </div>
  );
}
