import {Component, Inject, OnInit} from '@angular/core';

import {Menu} from '../../common/constant/menu';
import {MenuService} from '../../app.module';
import {trackByFn} from '../../common/utils/util';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public trackByFn = trackByFn;

  constructor(@Inject(MenuService) public menuService: Menu[]) {
  }

  public ngOnInit(): void {
    console.log(this.menuService);
  }
}
