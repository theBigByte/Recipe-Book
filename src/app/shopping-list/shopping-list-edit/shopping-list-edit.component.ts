import {Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { shoppingService } from '../../shared/shopping.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit 
{

  constructor(private shopList: shoppingService) { }

  ngOnInit() {
  }

  onAddItem(form: NgForm){
    const value = form.value;
    const finalingredientAdded = new Ingredient(value.name,value.amount);
    this.shopList.addIngredient(finalingredientAdded);
}

}
