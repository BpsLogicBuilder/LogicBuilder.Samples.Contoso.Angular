import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericListComponent } from './generic-list.component';

declare const describe: (description: string, specDefinitions: () => void) => void;
declare const beforeEach: (action: () => void) => void;
declare const it: (expectation: string, assertion?: () => void) => void;
declare const expect: (actual: unknown) => { toBeTruthy: () => void };

describe('GenericListComponent', () => {
  let component: GenericListComponent;
  let fixture: ComponentFixture<GenericListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenericListComponent]
    });
    fixture = TestBed.createComponent(GenericListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
