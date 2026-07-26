import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormFieldDropdownComponent } from './form-field-dropdown.component';

declare const describe: (description: string, specDefinitions: () => void) => void;
declare const beforeEach: (action: ((done: unknown) => void) | (() => void) | (() => Promise<void>)) => void;
declare const it: (expectation: string, assertion: () => void) => void;
declare const expect: (actual: unknown) => { toBeTruthy: () => void };

describe('FormFieldDropdownComponent', () => {
  let component: FormFieldDropdownComponent;
  let fixture: ComponentFixture<FormFieldDropdownComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFieldDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
