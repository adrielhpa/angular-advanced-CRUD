import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  declarations: [ReportsComponent],
  imports: [ReportsRoutingModule, SharedModule],
  exports: [ReportsComponent],
})
export class ReportsModule {}
