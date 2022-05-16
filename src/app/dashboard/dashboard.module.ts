import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {DashboardRoutingModule} from "./dashboard-routing.module";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {DashboardHeaderComponent} from "./components/dashboard-header/dashboard-header.component";
import {
  DashboardStatisticsComponent
} from "./components/dashboard-contents/dashboard-statistics/dashboard-statistics.component";
import {
  DashboardStatisticItemComponent
} from "./components/dashboard-contents/dashboard-statistics/dashboard-statistic-item/dashboard-statistic-item.component";

@NgModule({
  imports: [CommonModule, DashboardRoutingModule],
  declarations: [DashboardComponent, DashboardHeaderComponent, DashboardStatisticsComponent, DashboardStatisticItemComponent]
})
export class DashboardModule {
}
