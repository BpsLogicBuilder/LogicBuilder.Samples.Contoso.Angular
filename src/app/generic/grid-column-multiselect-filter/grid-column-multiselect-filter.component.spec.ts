import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NEVER } from 'rxjs';

import { GridColumnMultiselectFilterComponent } from './grid-column-multiselect-filter.component';
import { GenericService } from '../../http/generic.service';
import { UrlsService } from '../../http/urls.service';

declare const describe: (description: string, specDefinitions: () => void) => void;
declare const beforeEach: (action: ((done: unknown) => void) | (() => void) | (() => Promise<void>)) => void;
declare const it: (expectation: string, assertion: () => void) => void;
declare const expect: (actual: unknown) => { toBeTruthy: () => void };

describe('GridColumnMultiselectFilterComponent', () => {
  let component: GridColumnMultiselectFilterComponent;
  let fixture: ComponentFixture<GridColumnMultiselectFilterComponent>;
  let mockGenericService: jasmine.SpyObj<GenericService>;

  beforeEach(waitForAsync(() => {
    mockGenericService = jasmine.createSpyObj('GenericService', ['getList']);
    // Return NEVER so the observable never emits and doesn't cause errors during cleanup
    mockGenericService.getList.and.returnValue(NEVER);

    TestBed.configureTestingModule({
      declarations: [ GridColumnMultiselectFilterComponent ],
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
    fixture = TestBed.createComponent(GridColumnMultiselectFilterComponent);
    component = fixture.componentInstance;
    component.filterMenuTemplate = {
      requestDetails: { dataSourceUrl: '/test', modelType: 'Test' },
      textAndValueSelector: { textField: 'text', valueField: 'value' }
    };
    component.isPrimitive = false;
    component.currentFilter = { filters: [], logic: 'and' };
    component.textField = 'text';
    component.valueField = 'value';
    component.field = 'testField';
    component.filterService = jasmine.createSpyObj('FilterService', ['filter']);
    
    // Override ngOnInit to prevent it from running
    spyOn(component, 'ngOnInit');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
