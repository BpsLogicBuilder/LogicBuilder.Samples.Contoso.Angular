import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

import { DisplayDropdownValueComponent } from './display-dropdown-value.component';
import { GenericService } from '../../http/generic.service';
import { SettingsService } from '../../http/settings.service';
import { UrlsService } from '../../http/urls.service';

declare const describe: (description: string, specDefinitions: () => void) => void;
declare const beforeEach: (action: ((done: unknown) => void) | (() => void) | (() => Promise<void>)) => void;
declare const it: (expectation: string, assertion: () => void) => void;
declare const expect: (actual: unknown) => { toBeTruthy: () => void };

describe('DisplayDropdownValueComponent', () => {
  let component: DisplayDropdownValueComponent;
  let fixture: ComponentFixture<DisplayDropdownValueComponent>;
  let mockGenericService: jasmine.SpyObj<GenericService>;
  let mockSettingsService: jasmine.SpyObj<SettingsService>;

  beforeEach(waitForAsync(() => {
    mockGenericService = jasmine.createSpyObj('GenericService', ['getList']);
    mockSettingsService = jasmine.createSpyObj('SettingsService', ['getSelector']);
    mockGenericService.getList.and.returnValue(of([]));
    mockSettingsService.getSelector.and.returnValue(of({ success: true, selector: {} }));

    TestBed.configureTestingModule({
      declarations: [ DisplayDropdownValueComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        { provide: GenericService, useValue: mockGenericService },
        { provide: SettingsService, useValue: mockSettingsService },
        UrlsService
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDropdownValueComponent);
    component = fixture.componentInstance;
    component.valueTextTemplate = {
      requestDetails: { dataSourceUrl: '/test', modelType: 'Test' },
      textAndValueSelector: { textField: 'text', valueField: 'value' }
    } as any;
    component.selectedValue = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
