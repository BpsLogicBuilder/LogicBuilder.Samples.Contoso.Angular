import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GenericDetailComponent } from './generic-detail.component';

declare const describe: (description: string, specDefinitions: () => void) => void;
declare const beforeEach: (action: ((done: unknown) => void) | (() => void) | (() => Promise<void>)) => void;
declare const it: (expectation: string, assertion: () => void) => void;
declare const expect: (actual: unknown) => { toBeTruthy: () => void };

describe('GenericDetailComponent', () => {
  let component: GenericDetailComponent;
  let fixture: ComponentFixture<GenericDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
