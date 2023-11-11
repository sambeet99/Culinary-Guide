import { Component, OnInit } from '@angular/core';
import { RescipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RescipeService], // this recipe service same instance available to this component and all its component,
  //but not other components of this project
})
export class RecipesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
