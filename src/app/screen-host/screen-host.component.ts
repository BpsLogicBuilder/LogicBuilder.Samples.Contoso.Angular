import { Component, OnInit } from '@angular/core';
import { UiNotificationService } from '../common/ui-notification.service';
import { IScreenSettingsBase  } from '../stuctures/screens/i-screen-settings-base';
import { ViewTypeEnum } from '../stuctures/screens/i-view-type';

@Component({
    selector: 'app-screen-host',
    templateUrl: './screen-host.component.html',
    styleUrls: ['./screen-host.component.css'],
    standalone: false
})
export class ScreenHostComponent implements OnInit {

  constructor(private readonly _notificationService: UiNotificationService) { 
    _notificationService.screenSettings.subscribe(screen => {
      if (!(screen.validationResults?.length))
      {
        this.screenSettings = null;
        setTimeout(() => {
          this.screenSettings = screen;
        }, 10);
      }
      else
      {
        this.screenSettings = screen;
      }

      console.log("DialogFromSubscribe:" + JSON.stringify(screen));
   });
  }

  public viewType = ViewTypeEnum;
  public screenSettings?: IScreenSettingsBase | null;
  ngOnInit() {
    this._notificationService.start();
  }

}
