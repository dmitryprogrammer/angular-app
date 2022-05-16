import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, pluck} from "rxjs";

import {Albums} from "../models/albums.models";
import {DOMAIN_URL} from "./common-data";

@Injectable({
  providedIn: "root"
})
export class AlbumsService {
  private url: string = `${DOMAIN_URL}albums/`;

  constructor(private http: HttpClient) {
  }

  public getAlbums(): Observable<Albums> {
    return this.http.get(this.url) as Observable<Albums>;
  }

  public getAlbumsLength(): Observable<number> {
    return this.getAlbums().pipe(pluck("length"));
  }
}
