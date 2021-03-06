import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {UserComponent} from "./components/user/user.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/"
  },
  {
    path: ":id",
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
