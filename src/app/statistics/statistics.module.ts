import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics.component';
import { AccumulationChartModule, ChartModule } from '@syncfusion/ej2-angular-charts';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [StatisticsComponent],
  imports: [CommonModule, AccumulationChartModule, ChartModule, SharedModule],
})
export class StatisticsModule {}
