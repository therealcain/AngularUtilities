import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ProductionPipe} from "./production.pipe";

const Pipes = [
  ProductionPipe
];

@NgModule({
  imports: [CommonModule],
  declarations: [...Pipes],
  exports: [...Pipes]
})
export class PipesModule {}
