import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appArchiveTask]'
})
export class ArchiveTaskDirective {
  @HostListener('click') hello() {
    console.log('here')
  }

  constructor(public el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
