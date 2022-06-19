import {Pipe, PipeTransform} from "@angular/core";
import {environment} from "../../../environments/environment";

@Pipe({
  name: 'ProductionPipe'
})
export class ProductionPipe implements PipeTransform {
  transform(production: string, development: string): any {
    if(environment.production) {
      return production;
    }
    return development;
  }
}
