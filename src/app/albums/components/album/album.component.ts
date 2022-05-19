import {Component, HostBinding, OnInit} from "@angular/core";
import {ActivatedRoute, UrlSegment} from "@angular/router";
import {filter, map, Observable, switchMap} from "rxjs";

import {Album} from "../../../core/models/albums.models";
import {AlbumsService} from "../../../core/services/albums.service";
import {Photos} from "../../../core/models/photos.models";
import {PhotosService} from "../../../core/services/photos.service";

@Component({
  selector: "app-album",
  templateUrl: "./album.component.html",
  styleUrls: ["./album.component.scss"]
})
export class AlbumComponent implements OnInit {
  @HostBinding("class") public hostClass: string = "host-container";
  public album$: Observable<Album>;
  public albumPhotos$: Observable<Photos>;

  constructor(private activatedRoute: ActivatedRoute, private albumsService: AlbumsService, private photosService: PhotosService) {
  }

  public ngOnInit(): void {
    this.album$ = this.activatedRoute.url.pipe(
      filter((url: UrlSegment[]) => Boolean(url?.length)),
      map(([{path}]: UrlSegment[]): string => path),
      switchMap((albumId: string) => this.albumsService.getAlbumById(albumId))
    );

    this.albumPhotos$ = this.album$.pipe(
      filter((album: Album) => Boolean(album)),
      switchMap(({id}: Album) => this.photosService.getPhotosByAlbum(id))
    );
  }
}
