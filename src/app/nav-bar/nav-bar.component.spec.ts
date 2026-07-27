import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Subject } from 'rxjs';

import { NavBarComponent } from './nav-bar.component';
import { UiNotificationService } from '../common/ui-notification.service';
import { SettingsService } from '../http/settings.service';
import { UrlsService } from '../http/urls.service';
import { INavigationBar } from '../stuctures/i-navigation-bar';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let mockUiNotificationService: any;

  beforeEach(waitForAsync(() => {
    mockUiNotificationService = {
      navBar: new Subject<INavigationBar>(),
      screenSettings: new Subject<any>(),
      navStart: jasmine.createSpy('navStart')
    };

    TestBed.configureTestingModule({
      declarations: [ NavBarComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        { provide: UiNotificationService, useValue: mockUiNotificationService },
        SettingsService,
        UrlsService
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
