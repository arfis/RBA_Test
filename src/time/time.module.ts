import {NgModule} from "@angular/core";

import {TimeComponent} from "./time.component";
import {CommonModule} from "@angular/common";
import {TimeService} from "./time.service";

@NgModule({
  declarations: [
    TimeComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [TimeService],
  exports: [TimeComponent]
})

export class TimeModule{};
