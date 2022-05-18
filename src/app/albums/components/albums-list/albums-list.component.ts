import {Component, OnDestroy, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {filter, Subject, switchMap, takeUntil} from "rxjs";

import {AlbumsService} from "../../../core/services/albums.service";
import {PhotosService} from "../../../core/services/photos.service";
import {Album, Albums} from "../../../core/models/albums.models";
import {Photo, Photos} from "../../../core/models/photos.models";
import {trackByFn} from "../../../core/utils/util";

@Component({
  selector: "app-albums-list",
  templateUrl: "./albums-list.component.html",
  styleUrls: ["./albums-list.component.scss"]
})
export class AlbumsListComponent implements OnInit, OnDestroy {
  private unsubscribeSubject$: Subject<null> = new Subject<null>();
  public initialAlbums: Albums = [];
  public albums: Albums = [];

  public form: FormGroup = this.fb.group({
    title: [""]
  });

  public trackBy = trackByFn;

  constructor(private fb: FormBuilder, private albumsService: AlbumsService, private photosService: PhotosService) {
  }

  public ngOnInit(): void {
    this.albumsService
      .getAlbums()
      .pipe(
        switchMap(
          () => this.photosService.getPhotos(),
          (albums: Albums, photos: Photos) =>
            albums.map((album: Album) => ({
              ...album,
              photos: photos.filter((photo: Photo) => photo.albumId === album.id).slice(0, 4)
            }))
        ),
        takeUntil(this.unsubscribeSubject$)
      )
      .subscribe((albums: Albums) => {
        this.albums = albums;
        this.initialAlbums = albums;
      });

    this.form.valueChanges
      .pipe(
        filter(() => Boolean(this.initialAlbums?.length)),
        takeUntil(this.unsubscribeSubject$)
      )
      .subscribe(({title}: {title: string}) => {
        const valueTitle = title.toLowerCase().trim();
        this.albums = title
          ? this.initialAlbums.filter(({title: albumTitle}: Album) => albumTitle.includes(valueTitle))
          : this.initialAlbums;
      });
  }

  public ngOnDestroy(): void {
    this.unsubscribeSubject$.next(null);
    this.unsubscribeSubject$.complete();
  }
}
