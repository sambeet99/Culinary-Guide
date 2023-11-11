import { Subject } from 'rxjs';
import { Ingradient } from '../shared/ingradient.model';

export class ShoppingListService {
  ingradientsChanged = new Subject<Ingradient[]>();

  private ingradients: Ingradient[] = [
    new Ingradient('Pokhalo thali', 2),
    new Ingradient('macha bhaja', 4),
  ];

  getIngradients() {
    return this.ingradients.slice();
  }

  addIngradient(ingradient: Ingradient) {
    this.ingradients.push(ingradient);
    this.ingradientsChanged.next(this.ingradients.slice());
  }

  addIngradients(ingradients: Ingradient[]) {
    // for (let ingradient of ingradients) {
    //   this.addIngradient(ingradient);
    // }

    this.ingradients.push(...ingradients); //spread operator ES6 feature.
    this.ingradientsChanged.next(this.ingradients.slice()); //everytime items added , emit event to get latest updated items..
  }
}
