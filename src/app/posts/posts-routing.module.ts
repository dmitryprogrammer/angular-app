import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {PostsListComponent} from "./components/posts-list/posts-list.component";
import {PostComponent} from "./components/post/post.component";

const routes: Routes = [
  {
    path: "",
    component: PostsListComponent
  },
  {
    path: ":id",
    component: PostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
