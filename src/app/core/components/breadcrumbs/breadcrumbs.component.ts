import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: "app-breadcrumbs",
  templateUrl: "./breadcrumbs.component.html",
  styleUrls: ["./breadcrumbs.component.scss"]
})
export class BreadcrumbsComponent implements OnInit {
  public pathsList: string[] = [];

  constructor(private router: Router) {
  }

  public ngOnInit(): void {
    this.pathsList = this.router.url.split("/").slice(1);
  }

  public generateRouterLink(index: number): string[] {
    return ["/"].concat(this.pathsList.slice(0, index + 1));
  }
}
