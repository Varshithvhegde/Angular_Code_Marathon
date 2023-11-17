import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'occupiedStatus'
})
export class OccupiedStatusPipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): string {
    return value ? 'Not Available' : 'Available';
  }

}

