import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numOfStops'
})
export class NumOfStopsPipe implements PipeTransform {
  numOfStops: any;
  result: any;
  transform(value: any): any {
    if (value.length) {
      this.numOfStops = value.length;
      this.result = `${this.numOfStops} stop (${value})`;
    } else {
      this.result = 'Direct';
    }
    return this.result;
  }

}
