import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DisplayDropdownValueComponent } from './display-dropdown-value.component';

declare const describe: (description: string, specDefinitions: () => void) => void;
declare const beforeEach: (action: ((done: unknown) => void) | (() => void) | (() => Promise<void>)) => void;
declare const it: (expectation: string, assertion: () => void) => void;
declare const expect: (actual: unknown) => { toBeTruthy: () => void };

describe('DisplayDropdownValueComponent', () => {
  let component: DisplayDropdownValueComponent;
  let fixture: ComponentFixture<DisplayDropdownValueComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayDropdownValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDropdownValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
