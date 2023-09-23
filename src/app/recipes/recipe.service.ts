import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RescipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'pakhala',
      'khara dine',
      'https://static.s123-cdn-static-c.com/uploads/2101965/2000_5e741e821a9ee.jpg'
    ),
    new Recipe(
      'Abhada',
      'trip re',
      'https://odishabytes.com/wp-content/uploads/2020/12/abhada-e1607415839585.jpg.webp'
    ),
    new Recipe(
      'veg navratna',
      'feast',
      'https://www.indianveggiedelight.com/wp-content/uploads/2021/04/navratan-korma-instant-pot.jpg'
    ),
  ];

  getResipces(): Recipe[] {
    // this.recipes points to original array and thats why we sned a copy in getter.
    return this.recipes.slice();
  }
}
