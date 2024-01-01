import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(PreparationTime: number): string {
    if (Math.floor(PreparationTime / 60) == 0)
      return PreparationTime + " minutes";
    if (Math.floor(PreparationTime % 60) == 0)
      return Math.floor(PreparationTime / 60) + " hours";
    return Math.floor(PreparationTime / 60) + " hours and " + PreparationTime % 60 + " minutes";
  }
}
