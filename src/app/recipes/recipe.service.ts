import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {


    //make it privete to not have access to data from outside;
    private recipes: Recipe[] = [
        new Recipe(
            'Omlet',
            'This is simply a test',
            'https://www.supichka.com/files/images/2765/omlet_sas_sirene_1.jpg',
            [
                new Ingredient('eggs', 3),
                new Ingredient('cheese', 100)
            ]),
        new Recipe(
            'pizza',
            'This is simply a test',
            'https://static.toiimg.com/thumb/56933159.cms?imgsize=686279&width=800&height=800',
            [
                new Ingredient('flour', 3),
                new Ingredient('tomatoes', 2)
            ])
    ];

    constructor(private shoppingListService: ShoppingListService) {

    }
    //method to can get recipes from outside;
    getRecipes() {
        //return exact copy of recipes array, so we really cant access initial recipes array
        return this.recipes.slice()
    }

    getOneRecipe(index: number) {
        //return copy of recipes
        return this.recipes.slice()[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients)
    }
}