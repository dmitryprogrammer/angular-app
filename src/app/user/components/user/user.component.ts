import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, UrlSegment} from "@angular/router";
import {filter, map, Observable, switchMap} from "rxjs";

import {User} from "../../../core/models/users.models";
import {UsersService} from "../../../core/services/users.service";
import {Post, Posts} from "../../../core/models/posts.models";
import {PostsService} from "../../../core/services/posts.service";
import {AlbumsService} from "../../../core/services/albums.service";
import {Album, Albums} from "../../../core/models/albums.models";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  public user$: Observable<User>;
  public posts$: Observable<Posts>;
  public albums$: Observable<Albums>;
  private userId$: Observable<string>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UsersService,
    private postsService: PostsService,
    private albumsService: AlbumsService
  ) {
  }

  public ngOnInit(): void {
    this.userId$ = this.activatedRoute.url.pipe(
      filter((url: UrlSegment[]) => Boolean(url && url.length)),
      map(([{path}]: UrlSegment[]) => path)
    );

    this.user$ = this.userId$.pipe(switchMap((userId: string) => this.userService.getUser(userId)));
    this.posts$ = this.userId$.pipe(
      switchMap((userId: string) =>
        this.postsService.getPosts().pipe(map((posts: Posts): Posts => posts.filter((post: Post) => post.userId === Number(userId))))
      )
    );
    this.albums$ = this.userId$.pipe(
      switchMap((userId: string) =>
        this.albumsService
          .getAlbums()
          .pipe(map((albums: Albums): Albums => albums.filter((album: Album) => album.userId === Number(userId))))
      )
    );
  }
}
