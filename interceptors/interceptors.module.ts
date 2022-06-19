import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SpinnerComponent} from "./spinner.component";

const Components = [
  SpinnerComponent
];

@NgModule({
  imports: [CommonModule],
  declarations: [...Components],
  exports: [...Components]
})
export class InterceptorsModule {}
