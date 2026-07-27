import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

import { FormFieldDropdownComponent } from './form-field-dropdown.component';
import { GenericService } from '../../http/generic.service';
import { SettingsService } from '../../http/settings.service';
import { UrlsService } from '../../http/urls.service';

declare const describe: (description: string, specDefinitions: () => void) => void;
declare const beforeEach: (action: ((done: unknown) => void) | (() => void) | (() => Promise<void>)) => void;
declare const it: (expectation: string, assertion: () => void) => void;
declare const expect: (actual: unknown) => { toBeTruthy: () => void };

describe('FormFieldDropdownComponent', () => {
  let component: FormFieldDropdownComponent;
  let fixture: ComponentFixture<FormFieldDropdownComponent>;
  let mockGenericService: jasmine.SpyObj<GenericService>;
  let mockSettingsService: jasmine.SpyObj<SettingsService>;

  beforeEach(waitForAsync(() => {
    mockGenericService = jasmine.createSpyObj('GenericService', ['getList']);
    mockSettingsService = jasmine.createSpyObj('SettingsService', ['getSelector']);
    mockGenericService.getList.and.returnValue(of([]));
    mockSettingsService.getSelector.and.returnValue(of({ success: true, selector: {} }));

    TestBed.configureTestingModule({
      declarations: [ FormFieldDropdownComponent ],
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
    fixture = TestBed.createComponent(FormFieldDropdownComponent);
    component = fixture.componentInstance;
    component.dropDownTemplate = {
      requestDetails: { dataSourceUrl: '/test', modelType: 'Test' },
      textAndValueSelector: { textField: 'text', valueField: 'value' },
      placeHolderText: 'Select...'
    } as any;
    component.textField = 'text';
    component.valueField = 'value';
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
