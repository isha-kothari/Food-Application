import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCaseConverterButton'
})
export class UpperCaseConverterButtonPipe implements PipeTransform {

  transform(value: String): string {
    return value.charAt(0).toUpperCase()+value.slice(1);
  }

}
