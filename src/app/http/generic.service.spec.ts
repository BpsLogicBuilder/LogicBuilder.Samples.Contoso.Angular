import { TestBed, inject } from '@angular/core/testing';

import { GenericService } from './generic.service';

declare const describe: (description: string, specDefinitions: () => void) => void;
declare const beforeEach: (action: () => void) => void;
declare const it: (expectation: string, assertion: () => void) => void;
declare const expect: <T>(actual: T) => { toBeTruthy: () => void };

describe('GenericService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenericService]
    });
  });

  it('should be created', inject([GenericService], (service: GenericService) => {
    expect(service).toBeTruthy();
  }));
});
