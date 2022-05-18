import {Component, Inject} from "@angular/core";

import {Menu} from "../../core/constant/menu";
import {MenuService} from "../../app.module";
import {trackByFn} from "../../core/utils/util";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent {
  public trackByFn = trackByFn;

  constructor(@Inject(MenuService) public menuService: Menu[]) {
  }
}
