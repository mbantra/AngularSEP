import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booster',
  pure: false
})
export class BoosterPipe implements PipeTransform {

  transform(value: number, multiplicationValue: number = 1): number {
    return value * multiplicationValue;
  }

  //for impure pipes: avoid expensive operations: 
  // 1) making web api request 2) creating new instances of objects 3) timers 

}
