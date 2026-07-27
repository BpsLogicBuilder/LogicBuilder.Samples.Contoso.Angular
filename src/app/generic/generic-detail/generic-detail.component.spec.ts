import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

import { GenericDetailComponent } from './generic-detail.component';
import { GenericService } from '../../http/generic.service';
import { UiNotificationService } from '../../common/ui-notification.service';
import { UrlsService } from '../../http/urls.service';
import { SettingsService } from '../../http/settings.service';

declare const describe: (description: string, specDefinitions: () => void) => void;
declare const beforeEach: (action: ((done: unknown) => void) | (() => void) | (() => Promise<void>)) => void;
declare const it: (expectation: string, assertion: () => void) => void;
declare const expect: (actual: unknown) => { toBeTruthy: () => void };

describe('GenericDetailComponent', () => {
  let component: GenericDetailComponent;
  let fixture: ComponentFixture<GenericDetailComponent>;
  let mockGenericService: jasmine.SpyObj<GenericService>;
  let mockUiNotificationService: jasmine.SpyObj<UiNotificationService>;

  beforeEach(waitForAsync(() => {
    mockGenericService = jasmine.createSpyObj('GenericService', ['getItem']);
    mockUiNotificationService = jasmine.createSpyObj('UiNotificationService', ['navigateNext']);

    mockGenericService.getItem.and.returnValue(of({}));

    TestBed.configureTestingModule({
      declarations: [ GenericDetailComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        { provide: GenericService, useValue: mockGenericService },
        { provide: UiNotificationService, useValue: mockUiNotificationService },
        UrlsService,
        SettingsService
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericDetailComponent);
    component = fixture.componentInstance;
    component.settings = {
      fieldSettings: [],
      requestDetails: { getUrl: '/test', modelType: 'Test' },
      title: 'Test'
    } as any;
    component.commandButtons = [];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
