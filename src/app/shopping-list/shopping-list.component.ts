import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingradient } from '../shared/ingradient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingradients: Ingradient[];
  private igChangeSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingradients = this.shoppingListService.getIngradients();
    this.igChangeSub = this.shoppingListService.ingradientsChanged.subscribe(
      (ingradients: Ingradient[]) => {
        this.ingradients = ingradients;
      }
    );
  }

  // onIngradientAdded(ingradient: Ingradient) {
  //   this.ingradients.push(ingradient);
  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }
  // }
}
