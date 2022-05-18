import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

import {BreadcrumbsComponent} from "./components/breadcrumbs/breadcrumbs.component";

@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [BreadcrumbsComponent],
  exports: [BreadcrumbsComponent]
})
export class CoreModule {
}
