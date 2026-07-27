import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

import { GenericListComponent } from './generic-list.component';
import { GenericService } from '../../http/generic.service';
import { UiNotificationService } from '../../common/ui-notification.service';
import { UrlsService } from '../../http/urls.service';
import { SettingsService } from '../../http/settings.service';

declare const describe: (description: string, specDefinitions: () => void) => void;
declare const beforeEach: (action: () => void) => void;
declare const it: (expectation: string, assertion?: () => void) => void;
declare const expect: (actual: unknown) => { toBeTruthy: () => void };

describe('GenericListComponent', () => {
  let component: GenericListComponent;
  let fixture: ComponentFixture<GenericListComponent>;
  let mockGenericService: jasmine.SpyObj<GenericService>;
  let mockUiNotificationService: jasmine.SpyObj<UiNotificationService>;

  beforeEach(() => {
    mockGenericService = jasmine.createSpyObj('GenericService', ['getList']);
    mockUiNotificationService = jasmine.createSpyObj('UiNotificationService', ['navigateNext']);
    mockGenericService.getList.and.returnValue(of([]));

    TestBed.configureTestingModule({
      declarations: [GenericListComponent],
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
    });
    fixture = TestBed.createComponent(GenericListComponent);
    component = fixture.componentInstance;
    component.settings = {
      requestDetails: { dataSourceUrl: '/test', modelType: 'Test' },
      fieldsSelector: { textField: 'text', valueField: 'value' },
      fieldSettings: []
    } as any;
    component.commandButtons = [];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
