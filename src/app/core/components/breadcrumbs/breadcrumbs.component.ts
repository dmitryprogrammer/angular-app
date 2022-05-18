import {Component, OnDestroy, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Subject} from "rxjs";

@Component({
  selector: "app-breadcrumbs",
  templateUrl: "./breadcrumbs.component.html",
  styleUrls: ["./breadcrumbs.component.scss"]
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  private unsubscribeSubject$: Subject<null> = new Subject<null>();
  public pathsList: string[] = [];

  constructor(private router: Router) {
  }

  public ngOnInit(): void {
    this.pathsList = this.router.url.split("/").slice(1);
  }

  public ngOnDestroy(): void {
    this.unsubscribeSubject$.next(null);
    this.unsubscribeSubject$.complete();
  }

  public generateRouterLink(path: string): string[] {
    return ["/"].concat(this.pathsList);
  }
}
