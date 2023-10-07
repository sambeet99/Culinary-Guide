import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  constructor() {}
  // Recieves recipe object (each recipe of recipe array in recipe list component)
  // and assign it to a variable of type Recipe model (similar to POJO)
  //Since recipe list compo. is parent here hence that will send data to child
  @Input() recipe: Recipe;
  @Input() index: number; // get the value from R-list component.

  //select any single item on html and that will trigger function to emit event to  parent i.e. recipes-list
  //again recipe-list will emit event to its parent i.e. recipes compo.
  // coz recipes (grand parent) then will then display recipe detail component.  (2-level event emit)

  //@Output() recipeSelected = new EventEmitter<void>(); now we will use cross component communication instead of long chain of even emit
  // onSelected() {
  //   // this.recipeSelected.emit();

  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }

  ngOnInit(): void {}
}
