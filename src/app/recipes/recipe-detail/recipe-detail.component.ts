import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RescipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RescipeService) {}

  ngOnInit(): void {}
  onAddToShoppingList() {    // from recipe details ingradient to shoppinglist via recipe service.
    this.recipeService.addIngradientsToShoppingList(this.recipe.ingradients);
  }
}
