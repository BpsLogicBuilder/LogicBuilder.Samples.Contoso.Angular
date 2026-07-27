import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

import { FormFieldMultiselectComponent } from './form-field-multiselect.component';
import { GenericService } from '../../http/generic.service';
import { UrlsService } from '../../http/urls.service';

declare const describe: (description: string, specDefinitions: () => void) => void;
declare const beforeEach: (action: ((done: unknown) => void) | (() => void) | (() => Promise<void>)) => void;
declare const it: (expectation: string, assertion: () => void) => void;
declare const expect: (actual: unknown) => { toBeTruthy: () => void };

describe('FormFieldMultiselectComponent', () => {
  let component: FormFieldMultiselectComponent;
  let fixture: ComponentFixture<FormFieldMultiselectComponent>;
  let mockGenericService: jasmine.SpyObj<GenericService>;

  beforeEach(waitForAsync(() => {
    mockGenericService = jasmine.createSpyObj('GenericService', ['getList']);
    mockGenericService.getList.and.returnValue(of([]));

    TestBed.configureTestingModule({
      declarations: [ FormFieldMultiselectComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        { provide: GenericService, useValue: mockGenericService },
        UrlsService
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldMultiselectComponent);
    component = fixture.componentInstance;
    component.multiSelectTemplate = {
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
