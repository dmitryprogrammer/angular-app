import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {DashboardRoutingModule} from "./dashboard-routing.module";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {DashboardHeaderComponent} from "./components/dashboard-header/dashboard-header.component";

@NgModule({
  imports: [CommonModule, DashboardRoutingModule],
  declarations: [DashboardComponent, DashboardHeaderComponent]
})
export class DashboardModule {
}
