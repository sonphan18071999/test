import { Pipe, PipeTransform } from '@angular/core';
import { Car } from 'src/app/models';

@Pipe({
  name: 'configureButton',
})
export class ConfigureButtonPipe implements PipeTransform {
  transform(items: Car[] | null): Car[] {
    items?.forEach((item) => console.log(item));
    return [];
  }
}
