import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

import {PostsListComponent} from "./components/posts-list/posts-list.component";
import {PostsRoutingModule} from "./posts-routing.module";
import {PostComponent} from "./components/post/post.component";
import {CoreModule} from "../core/core.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, PostsRoutingModule, CoreModule],
  declarations: [PostsListComponent, PostComponent]
})
export class PostsModule {
}
