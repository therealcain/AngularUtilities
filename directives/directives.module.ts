import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {IntersectionObserverDirective} from "./intersection-observer.directive";

const Directives = [
  IntersectionObserverDirective
];

@NgModule({
  imports: [CommonModule],
  declarations: [...Directives],
  exports: [...Directives]
})
export class DirectivesModule {}
