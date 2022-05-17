import {Component} from "@angular/core";
import {Observable} from "rxjs";

import {Posts} from "../../../core/models/posts.models";
import {PostsService} from "../../../core/services/posts.service";
import {trackByFn} from "../../../core/utils/util";

@Component({
  selector: "app-posts-list",
  templateUrl: "./posts-list.component.html",
  styleUrls: ["./posts-list.component.scss"]
})
export class PostsListComponent {
  public posts$: Observable<Posts> = this.postsService.getPosts();

  constructor(private postsService: PostsService) {
  }

  public trackByFn = trackByFn;
}
