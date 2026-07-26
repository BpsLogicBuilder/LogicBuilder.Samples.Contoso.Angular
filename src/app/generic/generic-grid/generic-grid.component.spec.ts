import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GenericGridComponent } from './generic-grid.component';

declare const describe: (description: string, specDefinitions: () => void) => void;
declare const beforeEach: (action: ((done: unknown) => void) | (() => void) | (() => Promise<void>)) => void;
declare const it: (expectation: string, assertion: () => void) => void;
declare const expect: (actual: unknown) => { toBeTruthy: () => void };

describe('GenericGridComponent', () => {
  let component: GenericGridComponent;
  let fixture: ComponentFixture<GenericGridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
