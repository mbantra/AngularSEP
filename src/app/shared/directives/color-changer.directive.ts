import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorChanger]'
})
export class ColorChangerDirective {

  colorList = ['red', 'blue', 'yellow', 'magenta', 'cyan'];
  @HostBinding('style.color') color: string;

  @HostListener('keydown') changeColor() {

    this.color = this.colorList[Math.floor(Math.random() * this.colorList.length)];
  }

  constructor() { }

}
