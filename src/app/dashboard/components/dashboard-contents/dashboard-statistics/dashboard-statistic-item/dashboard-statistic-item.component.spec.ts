import {ComponentFixture, TestBed} from "@angular/core/testing";

import {DashboardStatisticItemComponent} from "./dashboard-statistic-item.component";

describe("DashboardStatisticItemComponent", () => {
  let component: DashboardStatisticItemComponent;
  let fixture: ComponentFixture<DashboardStatisticItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardStatisticItemComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardStatisticItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
