import {Component, Input} from "@angular/core";

@Component({
  selector: "app-dashboard-statistic-item",
  templateUrl: "./dashboard-statistic-item.component.html",
  styleUrls: ["./dashboard-statistic-item.component.scss"]
})
export class DashboardStatisticItemComponent {
  @Input() public value: string | number = "";
  @Input() public valueType: string = "";
}
