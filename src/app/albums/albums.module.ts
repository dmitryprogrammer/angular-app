import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

import {AlbumsRoutingModule} from "./albums-routing.module";
import {AlbumsListComponent} from "./components/albums-list/albums-list.component";
import {CoreModule} from "../core/core.module";
import {AlbumComponent} from "./components/album/album.component";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, AlbumsRoutingModule, CoreModule],
  declarations: [AlbumsListComponent, AlbumComponent]
})
export class AlbumsModule {
}
