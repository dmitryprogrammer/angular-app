import {ComponentFixture, TestBed} from "@angular/core/testing";

import {MenuComponent} from "./menu.component";
import {MenuService} from "../../app.module";
import {MENU} from "../../core/constant/menu";

describe("MenuComponent", () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuComponent],
      providers: [{provide: MenuService, useValue: MENU}]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
