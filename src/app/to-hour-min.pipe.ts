import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toHourMin'
})
export class ToHourMinPipe implements PipeTransform {
  result: string;
  _value: string;
  transform(value: number): string {
    (value + '').length < 4 ? this._value = '0' + value : this._value = value + '';
    this.result = `${this._value.substring(0, 2)}h ${this._value.substring(2, 4)}m`;
    return this.result;
  }

}
