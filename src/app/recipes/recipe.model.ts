import { Ingradient } from '../shared/ingradient.model';

export class Recipe {
  public name: String;
  public description: String;
  public imagePath: String;
  public ingradients: Ingradient[];

  constructor(
    name1: String,
    desc: String,
    path: String,
    ingradients: Ingradient[]
  ) {
    this.name = name1;
    this.description = desc;
    this.imagePath = path;
    this.ingradients = ingradients;
  }
}
