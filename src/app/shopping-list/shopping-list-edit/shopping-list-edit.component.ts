import {Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { shoppingService } from '../../shared/shopping.service';


@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit 
{
  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef : ElementRef;


  constructor(private shopList: shoppingService) { }

  ngOnInit() {
  }

  onSelectIngredient(){
    const newName = this.nameInputRef.nativeElement.value;
    const newAmount = this.amountInputRef.nativeElement.value;
    const finalingredientAdded = new Ingredient(newName,newAmount);
    this.shopList.addIngredient(finalingredientAdded);
}

}
