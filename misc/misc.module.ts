import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ScrollingProgressBarComponent} from "./scrolling-progress-bar.component";
import {MatProgressBarModule} from "@angular/material/progress-bar";

const Components = [
  ScrollingProgressBarComponent
];

@NgModule({
  imports: [CommonModule, MatProgressBarModule],
  declarations: [...Components],
  exports: [...Components]
})
export class MiscModule {}

