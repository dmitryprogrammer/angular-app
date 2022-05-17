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
import {
  DashboardLatestPostsComponent
} from "./components/dashboard-contents/dashboard-latest-posts/dashboard-latest-posts.component";

@NgModule({
  imports: [CommonModule, DashboardRoutingModule],
  declarations: [
    DashboardComponent,
    DashboardHeaderComponent,
    DashboardStatisticsComponent,
    DashboardStatisticItemComponent,
    DashboardLatestPostsComponent
  ]
})
export class DashboardModule {
}
