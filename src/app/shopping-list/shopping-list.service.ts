import { EventEmitter } from '@angular/core';
import { Ingradient } from '../shared/ingradient.model';

export class ShoppingListService {
  ingradientsChanged = new EventEmitter<Ingradient[]>();

  private ingradients: Ingradient[] = [
    new Ingradient('Pokhalo thali', 2),
    new Ingradient('macha bhaja', 4),
  ];

  getIngradients() {
    return this.ingradients.slice();
  }

  addIngradient(ingradient: Ingradient) {
    this.ingradients.push(ingradient);
    this.ingradientsChanged.emit(this.ingradients.slice());
  }
}
