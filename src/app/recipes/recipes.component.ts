import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { recipeService } from '../shared/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [recipeService]
})
export class RecipesComponent implements OnInit {

  selectedRecipe : Recipe;

  constructor(private recipeServ: recipeService,
  private router:Router) { }

  ngOnInit() {
      this.recipeServ.recipeSelected.subscribe(
        (recipe:Recipe) => {
          this.selectedRecipe = recipe;
        }
      );
  }

  onSelectButton(){
    this.router.navigate(['shopping-list']);
  }
}
