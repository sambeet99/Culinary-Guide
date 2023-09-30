import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingradient } from '../shared/ingradient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RescipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'pakhala',
      'khara dine',
      'https://static.s123-cdn-static-c.com/uploads/2101965/2000_5e741e821a9ee.jpg',
      [
        new Ingradient('curd', 1),
        new Ingradient('rice with water', 1),
        new Ingradient('bhaja', 1),
      ]
    ),
    new Recipe(
      'Abhada',
      'trip re',
      'https://odishabytes.com/wp-content/uploads/2020/12/abhada-e1607415839585.jpg.webp',
      [
        new Ingradient('ticket to puri', 1),
        new Ingradient('entry to mandir', 1),
      ]
    ),
    new Recipe(
      'veg navratna',
      'feast',
      'https://www.indianveggiedelight.com/wp-content/uploads/2021/04/navratan-korma-instant-pot.jpg',
      [
        new Ingradient('different veggies', 1),
        new Ingradient('skill to cook', 1),
      ]
    ),
  ];

  constructor(private slservice: ShoppingListService) {}
  getResipces(): Recipe[] {
    // this.recipes points to original array and thats why we sned a copy in getter.
    return this.recipes.slice();
  }

  addIngradientsToShoppingList(ingradients: Ingradient[]) {
    this.slservice.addIngradients(ingradients);
  }
}
