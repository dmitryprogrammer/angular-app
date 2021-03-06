import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {DashboardModule} from "./dashboard/dashboard.module";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "dashboard"
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
  },
  {
    path: "user",
    loadChildren: () => import("./user/user.module").then(({UserModule}) => UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
