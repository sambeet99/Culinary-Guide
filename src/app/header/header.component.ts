import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  // Emits event by child so that parent 'app component' can listen.  Annotation  @Output() makes event listenable outside its own component.
  @Output() featureSelected = new EventEmitter<string>();

  OnSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
