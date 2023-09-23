import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingradient } from 'src/app/shared/ingradient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  //@Output() ingradienetAddd = new EventEmitter<Ingradient>();

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {}

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingValue = this.amountInputRef.nativeElement.value;
    const newIngradient = new Ingradient(ingName, ingValue);

    this.slService.addIngradient(newIngradient);
    //this.ingradienetAddd.emit(newIngradient);
  }
}
