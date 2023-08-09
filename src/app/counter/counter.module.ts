import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ButtonAddComponent } from "./button-add/button-add.component";
import { ButtonDisComponent } from "./button-dis/button-dis.component";
import { CounterComponent } from "./counter.component";

@NgModule({
  declarations: [
    ButtonAddComponent,
    ButtonDisComponent,
    CounterComponent
  ],
  imports: [CommonModule],
  exports: [CounterComponent]
})
export class CounterModule {}
