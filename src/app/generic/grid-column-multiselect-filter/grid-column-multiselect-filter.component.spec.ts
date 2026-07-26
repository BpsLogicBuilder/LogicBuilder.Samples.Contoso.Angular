import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GridColumnMultiselectFilterComponent } from './grid-column-multiselect-filter.component';

declare const describe: (description: string, specDefinitions: () => void) => void;
declare const beforeEach: (action: ((done: unknown) => void) | (() => void) | (() => Promise<void>)) => void;
declare const it: (expectation: string, assertion: () => void) => void;
declare const expect: (actual: unknown) => { toBeTruthy: () => void };

describe('GridColumnMultiselectFilterComponent', () => {
  let component: GridColumnMultiselectFilterComponent;
  let fixture: ComponentFixture<GridColumnMultiselectFilterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GridColumnMultiselectFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridColumnMultiselectFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
