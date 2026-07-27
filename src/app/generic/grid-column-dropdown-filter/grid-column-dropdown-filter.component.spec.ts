import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { FilterService } from '@progress/kendo-angular-grid';

import { GridColumnDropdownFilterComponent } from './grid-column-dropdown-filter.component';
import { GenericService } from '../../http/generic.service';
import { UrlsService } from '../../http/urls.service';

declare const describe: (description: string, specDefinitions: () => void) => void;
declare const beforeEach: (action: ((done: unknown) => void) | (() => void) | (() => Promise<void>)) => void;
declare const it: (expectation: string, assertion: () => void) => void;
declare const expect: (actual: unknown) => { toBeTruthy: () => void };

describe('GridColumnDropdownFilterComponent', () => {
  let component: GridColumnDropdownFilterComponent;
  let fixture: ComponentFixture<GridColumnDropdownFilterComponent>;
  let mockGenericService: jasmine.SpyObj<GenericService>;
  let mockFilterService: jasmine.SpyObj<FilterService>;

  beforeEach(waitForAsync(() => {
    mockGenericService = jasmine.createSpyObj('GenericService', ['getList']);
    mockFilterService = jasmine.createSpyObj('FilterService', ['filter']);
    mockGenericService.getList.and.returnValue(of([]));

    TestBed.configureTestingModule({
      declarations: [ GridColumnDropdownFilterComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        { provide: GenericService, useValue: mockGenericService },
        { provide: FilterService, useValue: mockFilterService },
        UrlsService
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridColumnDropdownFilterComponent);
    component = fixture.componentInstance;
    component.filterRowTemplate = {
      requestDetails: { dataSourceUrl: '/test', modelType: 'Test' },
      textAndValueSelector: { textField: 'text', valueField: 'value' }
    };
    component.filter = { filters: [], logic: 'and' };
    component.textField = 'text';
    component.valueField = 'value';
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
