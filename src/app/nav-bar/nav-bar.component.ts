import { Component } from '@angular/core';
import { UiNotificationService } from '../common/ui-notification.service';
import { INavigationBar } from '../stuctures/i-navigation-bar';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css'],
    standalone: false
})
export class NavBarComponent {

  constructor(private readonly _notificationService: UiNotificationService) {
    _notificationService.navBar.subscribe(nb => {
      this.navBar = nb;
    });
  }

  public navBar?: INavigationBar;
  public isCollapsed: boolean = false;

  menuItemClick(stage: number, mod: string) {
    console.log("menuItemClick");
    this._notificationService.navStart({
      initialModuleName: mod,
      targetModule: stage
    });
  }

  doNothing() {
    console.log("Do Nothing");
  }
}
