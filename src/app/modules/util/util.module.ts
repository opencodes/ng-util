import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilityComponent } from './utility/utility.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    UtilityComponent
  ],
  declarations: [UtilityComponent],
  providers: []
})
export class UtilModule {
}
