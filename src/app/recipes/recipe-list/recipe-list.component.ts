import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
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

  constructor() {}

  ngOnInit(): void {}

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  //event accepted by its child has to pass up to its parent i.e. 2 level emit
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
