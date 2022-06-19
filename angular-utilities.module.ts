import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ObserversModule} from "./observers/observers.module";
import {InterceptorsModule} from "./interceptors/interceptors.module";
import {PipesModule} from "./pipes/pipes.module";
import {MiscModule} from "./misc/misc.module";

const Modules = [
  ObserversModule,
  InterceptorsModule,
  PipesModule,
  MiscModule
];

@NgModule({
  imports: [CommonModule, ...Modules],
  declarations: [],
  exports: [...Modules]
})
export class AngularUtilitiesModule {}
