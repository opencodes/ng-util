import { DateUtilService } from './service/date-util.service';
import { ArrayUtilService } from './service/array-util.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilityComponent } from './utility/utility.component';
import { StringUtilService } from './service/string-util.service';
import { NumberUtilService } from './service/number-util.service';
import { ObjectUtilService } from './service/object-util.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    UtilityComponent, StringUtilService, NumberUtilService, ObjectUtilService, ArrayUtilService, DateUtilService
  ],
  declarations: [UtilityComponent],
  providers: [StringUtilService, NumberUtilService, ObjectUtilService, ArrayUtilService, DateUtilService]
})
export class UtilModule {
}
