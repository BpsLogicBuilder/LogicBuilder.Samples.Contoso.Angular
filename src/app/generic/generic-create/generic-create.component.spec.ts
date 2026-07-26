import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GenericCreateComponent } from './generic-create.component';

declare const describe: (description: string, specDefinitions: () => void) => void;
declare const beforeEach: (action: ((done: unknown) => void) | (() => void) | (() => Promise<void>)) => void;
declare const it: (expectation: string, assertion: () => void) => void;
declare const expect: (actual: unknown) => { toBeTruthy: () => void };

describe('GenericCreateComponent', () => {
  let component: GenericCreateComponent;
  let fixture: ComponentFixture<GenericCreateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
