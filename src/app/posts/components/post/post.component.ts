import {Component, HostBinding, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, UrlSegment} from "@angular/router";
import {filter, map, pluck, Subject, switchMap, takeUntil, tap} from "rxjs";

import {PostsService} from "../../../core/services/posts.service";
import {Post} from "../../../core/models/posts.models";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"]
})
export class PostComponent implements OnInit, OnDestroy {
  @HostBinding("class") public hostClass: string = "host-container";
  private unsubscribeSubject: Subject<null> = new Subject<null>();
  public postId: number;
  public post: Post;

  constructor(private activatedRoute: ActivatedRoute, private postsService: PostsService) {
  }

  public ngOnInit(): void {
    this.activatedRoute.url
      .pipe(
        filter((url: UrlSegment[]) => Boolean(url && url.length)),
        pluck("0", "path"),
        map((postId: unknown) => Number(postId)),
        tap((postId) => {
          this.postId = postId;
        }),
        switchMap((postId) => this.postsService.getPost(postId)),
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe((post: Post) => {
        this.post = post;
      });
  }

  public ngOnDestroy(): void {
    this.unsubscribeSubject.next(null);
    this.unsubscribeSubject.complete();
  }
}
