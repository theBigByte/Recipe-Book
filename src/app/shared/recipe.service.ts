import { Recipe } from "../recipes/recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "./ingredient.model";
import { shoppingService } from "./shopping.service";

@Injectable()
export class recipeService{

recipeSelected = new EventEmitter<Recipe>();

recipes : Recipe[] = [
    new Recipe('burger',
    'this is a very nice burger',
    'https://s3-media3.fl.yelpcdn.com/bphoto/n-1c6QvnmHHUnFAtOHkJUQ/o.jpg',
    [new Ingredient('Buns',2),
    new Ingredient('Tomato',3),
    new Ingredient('meat',2)
    ]),
    new Recipe('egg omlate',
    'salty egg omlete',
    'http://baseballstrength.org/wp-content/uploads/2015/12/omlet-1024x683-720x405.jpg'
       ,[
           new Ingredient('egg',2),
           new Ingredient('masala', 4)
       ] )
];

constructor(private shList : shoppingService){}

onAddItem(){
return this.recipes.slice();
}

getRecipeId(id:number){
    return this.recipes[id];
}

addIngredientsToShoppingList(ingredient:Ingredient[]){
    this.shList.addIngsIn(ingredient);
}

}