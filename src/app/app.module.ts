import {InjectionToken, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./components/app/app.component";
import {MenuComponent} from "./components/menu/menu.component";
import {MENU} from "./core/constant/menu";

export const MenuService = new InjectionToken<string>("MenuService");

@NgModule({
  imports: [BrowserModule, NgbModule, CommonModule, HttpClientModule, AppRoutingModule],
  declarations: [AppComponent, MenuComponent],
  providers: [
    {
      provide: MenuService,
      useValue: MENU
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
