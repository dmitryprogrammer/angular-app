import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, pluck} from "rxjs";

import {Posts} from "../models/posts.models";
import {DOMAIN_URL} from "./common-data";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  private url: string = `${DOMAIN_URL}posts/`;

  constructor(private http: HttpClient) {
  }

  public getPosts(): Observable<Posts> {
    return this.http.get(this.url) as Observable<Posts>;
  }

  public getPostsLength(): Observable<number> {
    return this.getPosts().pipe(pluck("length"));
  }
}
