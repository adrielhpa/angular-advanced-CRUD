import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports/reports.component';

import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [ReportsComponent],
  imports: [ReportsRoutingModule, SharedModule, ChartModule],
  exports: [ReportsComponent],
})
export class ReportsModule {}
