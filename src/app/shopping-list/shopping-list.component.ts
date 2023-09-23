import { Component, OnInit } from '@angular/core';
import { Ingradient } from '../shared/ingradient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingradients: Ingradient[];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingradients = this.shoppingListService.getIngradients();
    this.shoppingListService.ingradientsChanged.subscribe(
      (ingradients: Ingradient[]) => {
        this.ingradients = ingradients;
      }
    );
  }

  // onIngradientAdded(ingradient: Ingradient) {
  //   this.ingradients.push(ingradient);
  // }
}
