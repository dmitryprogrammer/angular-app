import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app/app.component';
import {MenuComponent} from './components/menu/menu.component';

@NgModule({
  imports: [BrowserModule, NgbModule, AppRoutingModule],
  declarations: [AppComponent, MenuComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
