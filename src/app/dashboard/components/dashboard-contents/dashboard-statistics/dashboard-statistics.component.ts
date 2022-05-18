import {Component, HostBinding} from "@angular/core";
import {Observable} from "rxjs";

import {PostsService} from "../../../../core/services/posts.service";
import {PhotosService} from "../../../../core/services/photos.service";
import {AlbumsService} from "../../../../core/services/albums.service";

export enum DashboardItemTypes {
  POSTS = "Posts",
  PHOTOS = "Photos",
  ALBUMS = "Albums",
}

@Component({
  selector: "app-dashboard-statistics",
  templateUrl: "./dashboard-statistics.component.html",
  styleUrls: ["./dashboard-statistics.component.scss"]
})
export class DashboardStatisticsComponent {
  @HostBinding("class") public hostClass: string = "dashboard-content-block-body";
  public DashboardItemTypes = DashboardItemTypes;
  public postsLength$: Observable<number> = this.postsService.getPostsLength();
  public photosLength$: Observable<number> = this.photoService.getPhotosLength();
  public albumsLength$: Observable<number> = this.albumsService.getAlbumsLength();

  constructor(private postsService: PostsService, private photoService: PhotosService, private albumsService: AlbumsService) {
  }
}
