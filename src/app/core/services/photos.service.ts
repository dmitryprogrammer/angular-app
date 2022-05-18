import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, pluck} from "rxjs";

import {DOMAIN_URL} from "./common-data";
import {Photos} from "../models/photos.models";

@Injectable({
  providedIn: "root"
})
export class PhotosService {
  private url: string = `${DOMAIN_URL}photos/`;

  constructor(private http: HttpClient) {
  }

  public getPhotos(): Observable<Photos> {
    return this.http.get(this.url) as Observable<Photos>;
  }

  public getPhotosLength(): Observable<number> {
    return this.getPhotos().pipe(pluck("length"));
  }
}
