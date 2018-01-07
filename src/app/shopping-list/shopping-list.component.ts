import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { shoppingService } from '../shared/shopping.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients : Ingredient [];

  constructor(private shopService : shoppingService) { }

  ngOnInit() {
    this.ingredients = this.shopService.getIngredient();
    this.shopService.ingredienting.subscribe(
      (ingred:Ingredient[]) => {
        this.ingredients = ingred 
           }
    )
  }


}
