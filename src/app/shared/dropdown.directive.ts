import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {

  // click event enables dropdown to attach css class to the element so that dropdown can expand.
  //attach the css class to an element with hostbinding

  @HostBinding('class.open') isOpen: boolean = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
