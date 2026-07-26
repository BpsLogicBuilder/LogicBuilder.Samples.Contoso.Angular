import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GridColumnDropdownFilterComponent } from './grid-column-dropdown-filter.component';

declare const describe: (description: string, specDefinitions: () => void) => void;
declare const beforeEach: (action: ((done: unknown) => void) | (() => void) | (() => Promise<void>)) => void;
declare const it: (expectation: string, assertion: () => void) => void;
declare const expect: (actual: unknown) => { toBeTruthy: () => void };

describe('GridColumnDropdownFilterComponent', () => {
  let component: GridColumnDropdownFilterComponent;
  let fixture: ComponentFixture<GridColumnDropdownFilterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GridColumnDropdownFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridColumnDropdownFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
