import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, pluck} from "rxjs";

import {Album, Albums} from "../models/albums.models";
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

  public getAlbumById(id: number | string): Observable<Album> {
    if (id) {
      return this.http.get(`${this.url}/${id}`) as Observable<Album>;
    }

    return null;
  }

  public getAlbumsLength(): Observable<number> {
    return this.getAlbums().pipe(pluck("length"));
  }
}
