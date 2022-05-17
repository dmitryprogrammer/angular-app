import {ComponentFixture, TestBed} from "@angular/core/testing";

import {DashboardLatestPostsComponent} from "./dashboard-latest-posts.component";

describe("DashboardLatestPostsComponent", () => {
  let component: DashboardLatestPostsComponent;
  let fixture: ComponentFixture<DashboardLatestPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardLatestPostsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLatestPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
