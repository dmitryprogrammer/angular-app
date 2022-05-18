import {Component, OnDestroy, OnInit} from "@angular/core";
import {filter, Observable, Subject, takeUntil} from "rxjs";

import {Post, Posts} from "../../../core/models/posts.models";
import {PostsService} from "../../../core/services/posts.service";
import {trackByFn} from "../../../core/utils/util";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: "app-posts-list",
  templateUrl: "./posts-list.component.html",
  styleUrls: ["./posts-list.component.scss"]
})
export class PostsListComponent implements OnInit, OnDestroy {
  private unsubscribeSubject$: Subject<null> = new Subject<null>();
  private posts$: Observable<Posts> = this.postsService.getPosts();
  private initialPosts: Posts = [];
  public posts: Posts = [];
  public form: FormGroup = this.fb.group({
    title: [""]
  });
  public trackByFn = trackByFn;

  constructor(private fb: FormBuilder, private postsService: PostsService) {
  }

  public ngOnInit(): void {
    this.posts$.pipe(takeUntil(this.unsubscribeSubject$)).subscribe((posts: Posts) => {
      this.posts = posts;
      this.initialPosts = posts;
    });

    this.form.valueChanges
      .pipe(
        filter(() => Boolean(this.initialPosts?.length)),
        takeUntil(this.unsubscribeSubject$)
      )
      .subscribe(({title}: {title: string; type: string}) => {
        const valueTitle = title.toLowerCase().trim();
        this.posts = title ? this.initialPosts.filter(({title: postTitle}: Post) => postTitle.includes(valueTitle)) : this.initialPosts;
      });
  }

  public ngOnDestroy(): void {
    this.unsubscribeSubject$.next(null);
    this.unsubscribeSubject$.complete();
  }
}
