import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

import { GenericCreateComponent } from './generic-create.component';
import { GenericService } from '../../http/generic.service';
import { DateService } from '../../common/date.service';
import { UiNotificationService } from '../../common/ui-notification.service';
import { ListManagerService } from '../../common/list-manager.service';
import { UrlsService } from '../../http/urls.service';
import { SettingsService } from '../../http/settings.service';

declare const describe: (description: string, specDefinitions: () => void) => void;
declare const beforeEach: (action: ((done: unknown) => void) | (() => void) | (() => Promise<void>)) => void;
declare const it: (expectation: string, assertion: () => void) => void;
declare const expect: (actual: unknown) => { toBeTruthy: () => void };

describe('GenericCreateComponent', () => {
  let component: GenericCreateComponent;
  let fixture: ComponentFixture<GenericCreateComponent>;
  let mockGenericService: jasmine.SpyObj<GenericService>;
  let mockUiNotificationService: jasmine.SpyObj<UiNotificationService>;
  let mockListManagerService: jasmine.SpyObj<ListManagerService>;

  beforeEach(waitForAsync(() => {
    mockGenericService = jasmine.createSpyObj('GenericService', ['insertItem']);
    mockUiNotificationService = jasmine.createSpyObj('UiNotificationService', ['navigateNext']);
    mockListManagerService = jasmine.createSpyObj('ListManagerService', ['updateFormEntityState']);

    mockGenericService.insertItem.and.returnValue(of({} as any));
    mockListManagerService.updateFormEntityState.and.returnValue({} as any);

    TestBed.configureTestingModule({
      declarations: [ GenericCreateComponent ],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        { provide: GenericService, useValue: mockGenericService },
        { provide: UiNotificationService, useValue: mockUiNotificationService },
        { provide: ListManagerService, useValue: mockListManagerService },
        DateService,
        UrlsService,
        SettingsService
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericCreateComponent);
    component = fixture.componentInstance;
    component.settings = {
      fieldSettings: [],
      requestDetails: { getUrl: '/test', modelType: 'Test' },
      title: 'Test',
      conditionalDirectives: {}
    } as any;
    component.commandButtons = [];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
