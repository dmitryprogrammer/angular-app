import {Component, HostBinding} from "@angular/core";
import {map, Observable} from "rxjs";

import {Photos} from "../../../../core/models/photos.models";
import {PhotosService} from "../../../../core/services/photos.service";
import {trackByFn} from "../../../../core/utils/util";

@Component({
  selector: "app-dashboard-photos",
  templateUrl: "./dashboard-photos.component.html",
  styleUrls: ["./dashboard-photos.component.scss"]
})
export class DashboardPhotosComponent {
  @HostBinding("class") public hostClass: string = "dashboard-content-block-body";
  public photos$: Observable<Photos> = this.photosService.getPhotos().pipe(map((photos: Photos): Photos => photos.slice(0, 50)));

  public trackBy = trackByFn;

  constructor(private photosService: PhotosService) {
  }
}
