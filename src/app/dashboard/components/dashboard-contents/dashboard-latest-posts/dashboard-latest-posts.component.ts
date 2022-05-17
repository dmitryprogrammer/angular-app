import {Component} from "@angular/core";
import {Observable} from "rxjs";

import {Posts} from "../../../../core/models/posts.models";
import {PostsService} from "../../../../core/services/posts.service";
import {trackByFn} from "../../../../core/utils/util";

@Component({
  selector: "app-dashboard-latest-posts",
  templateUrl: "./dashboard-latest-posts.component.html",
  styleUrls: ["./dashboard-latest-posts.component.scss"]
})
export class DashboardLatestPostsComponent {
  public posts$: Observable<Posts> = this.postsService.getPosts();

  constructor(private postsService: PostsService) {
  }

  public trackByFn = trackByFn;
}
