import { Ingredient } from "./ingredient.model";
import { EventEmitter } from "@angular/core";

export class shoppingService{

    ingredienting = new EventEmitter<Ingredient[]>();
    
   private ingredients : Ingredient [] = [
        new Ingredient('Buns',2),
        new Ingredient('tomatos',4)
      ];

getIngredient(){
    return this.ingredients.slice();
}

addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredienting.emit(this.ingredients.slice());
}

addIngsIn(ingredient:Ingredient[]){
    this.ingredients.push(...ingredient);
    this.ingredienting.emit(this.ingredients.slice());
}

}