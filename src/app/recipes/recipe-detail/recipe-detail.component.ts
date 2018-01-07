import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { recipeService } from '../../shared/recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

recipe : Recipe;
id : number;

  constructor(private ingredientMove : recipeService,
  private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params) => {
          this.id = +params['id'];
          this.recipe = this.ingredientMove.getRecipeId(this.id);
      }
    );
  }

  onAddIngredient(){
    this.ingredientMove.addIngredientsToShoppingList(this.recipe.ingredient);
  }

}
