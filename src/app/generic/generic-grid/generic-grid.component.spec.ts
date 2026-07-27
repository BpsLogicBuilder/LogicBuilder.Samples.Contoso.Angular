import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

import { GenericGridComponent } from './generic-grid.component';
import { GridService } from '../../http/grid.service';
import { UiNotificationService } from '../../common/ui-notification.service';
import { UrlsService } from '../../http/urls.service';
import { SettingsService } from '../../http/settings.service';

declare const describe: (description: string, specDefinitions: () => void) => void;
declare const beforeEach: (action: ((done: unknown) => void) | (() => void) | (() => Promise<void>)) => void;
declare const it: (expectation: string, assertion: () => void) => void;
declare const expect: (actual: unknown) => { toBeTruthy: () => void };

describe('GenericGridComponent', () => {
  let component: GenericGridComponent;
  let fixture: ComponentFixture<GenericGridComponent>;
  let mockGridService: jasmine.SpyObj<GridService>;
  let mockUiNotificationService: jasmine.SpyObj<UiNotificationService>;

  beforeEach(waitForAsync(() => {
    mockGridService = jasmine.createSpyObj('GridService', ['fetch']);
    mockUiNotificationService = jasmine.createSpyObj('UiNotificationService', ['navigateNext']);
    mockGridService.fetch.and.returnValue(of({ data: [], total: 0, aggregateResult: undefined }));

    TestBed.configureTestingModule({
      declarations: [ GenericGridComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        { provide: GridService, useValue: mockGridService },
        { provide: UiNotificationService, useValue: mockUiNotificationService },
        UrlsService,
        SettingsService
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericGridComponent);
    component = fixture.componentInstance;
    component.settings = {
      requestDetails: { dataSourceUrl: '/test', modelType: 'Test' },
      columns: [],
      state: {
        skip: 0,
        take: 10,
        filterGroup: { logic: 'and', filters: [] }
      },
      aggregates: []
    } as any;
    component.commandButtons = [];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
