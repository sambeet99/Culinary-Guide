import { Component, OnInit } from '@angular/core';
import { Ingradient } from '../shared/ingradient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingradients: Ingradient[]=[new Ingradient('Pokhalo thali',2), new Ingradient('macha bhaja', 4)];

  constructor() { }

  ngOnInit(): void {
  }

  onIngradientAdded(ingradient: Ingradient) {
    
    this.ingradients.push(ingradient);

  }

}
