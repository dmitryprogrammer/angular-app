import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {BreadcrumbsComponent} from "./components/breadcrumbs/breadcrumbs.component";
import {PhotosComponent} from "./services/photos/photos.component";

@NgModule({
  imports: [RouterModule],
  declarations: [BreadcrumbsComponent, PhotosComponent],
  exports: [BreadcrumbsComponent]
})
export class CoreModule {
}
