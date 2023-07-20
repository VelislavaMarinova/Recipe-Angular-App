// import {EventEmitter} from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

    // ingredientsChanged=new EventEmitter<Ingredient[]>();
    ingredientsChanged = new Subject<Ingredient[]>();
    strartedEditing= new Subject<number>()



    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    getIngredients() {
        return this.ingredients.slice()
    }

    getIngredient(index:number){
        return this.ingredients[index]
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice())
    }

    addIngredients(ingredients: Ingredient[]){
        // for(let ingredient of ingredients){
        //     this.addIngredient(ingredient);
        // }

        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice())

    }

    editIngredient(index:number, editedIngredient: Ingredient){
        this.ingredients[index]=editedIngredient;
        this.ingredientsChanged.next(this.ingredients.slice())

    }
}