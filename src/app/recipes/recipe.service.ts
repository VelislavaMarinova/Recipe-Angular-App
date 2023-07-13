import { Recipe } from "./recipe.model";

export class RecipeService {

    //make it privete to not have access to data from outside;
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new Recipe('AAAAAAAA recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
    ];
    //method to can get recipes from outside;
    getRecipes() {
        //return exact copy of recipes array, so we really cant access initial recipes array
        return this.recipes.slice()
    }
}