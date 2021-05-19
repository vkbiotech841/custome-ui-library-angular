import { NgModule } from '@angular/core';
import { UiComponent } from './ui.component';

import { FontsModule } from './fonts/fonts.module';





@NgModule({
  declarations:
    [
      UiComponent
    ],
  imports:
    [
      FontsModule
    ],
  exports:
    [
      UiComponent,
    ]
})
export class UiModule { }
