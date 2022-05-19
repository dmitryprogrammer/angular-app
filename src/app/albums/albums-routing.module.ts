import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {AlbumsListComponent} from "./components/albums-list/albums-list.component";
import {AlbumComponent} from "./components/album/album.component";

const routes: Routes = [
  {
    path: "",
    component: AlbumsListComponent
  },
  {
    path: ":id",
    component: AlbumComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule {
}
