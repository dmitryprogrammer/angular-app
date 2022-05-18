import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {DashboardModule} from "./dashboard/dashboard.module";

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "dashboard",
    loadChildren: () => import("./dashboard/dashboard.module").then(({DashboardModule}) => DashboardModule)
  },
  {
    path: "posts",
    loadChildren: () => import("./posts/posts.module").then(({PostsModule}) => PostsModule)
  },
  {
    path: "albums",
    loadChildren: () => import("./albums/albums.module").then(({AlbumsModule}) => AlbumsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
