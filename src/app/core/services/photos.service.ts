import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, pluck} from "rxjs";

import {Posts} from "../models/posts.models";
import {DOMAIN_URL} from "./common-data";

@Injectable({
  providedIn: "root"
})
export class PhotosService {
  private url: string = `${DOMAIN_URL}photos/`;

  constructor(private http: HttpClient) {
  }

  public getPhotos(): Observable<Posts> {
    return this.http.get(this.url) as Observable<Posts>;
  }

  public getPhotosLength(): Observable<number> {
    return this.getPhotos().pipe(pluck("length"));
  }
}
