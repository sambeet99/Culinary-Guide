import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RescipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private recipeService: RescipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    //const id = this.route.snapshot.params['id'];  use react to capture the change by selecting item

    this.route.params.subscribe((param: Params) => {
      this.id = +param['id']; //type cast into string by adding +
      this.recipe = this.recipeService.getRecipe(this.id); // fetch path variable and store it in recipe service and render recipe object
    });
  }

  onAddToShoppingList() {
    // from recipe details ingradient to shoppinglist via recipe service.
    this.recipeService.addIngradientsToShoppingList(this.recipe.ingradients);
  }

  onRecipeEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
