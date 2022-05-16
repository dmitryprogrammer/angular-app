import {Component, OnInit} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: "app-breadcrumbs",
  templateUrl: "./breadcrumbs.component.html",
  styleUrls: ["./breadcrumbs.component.scss"]
})
export class BreadcrumbsComponent implements OnInit {
  constructor(private router: Router) {
  }

  public ngOnInit(): void {
    this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd)).subscribe(console.log);
  }
}
