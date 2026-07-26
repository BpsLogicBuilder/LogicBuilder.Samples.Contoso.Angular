import { TestBed, inject } from '@angular/core/testing';

import { ListManagerService } from './list-manager.service';

declare const describe: (description: string, specDefinitions: () => void) => void;
declare const beforeEach: (action: () => void) => void;
declare const it: (expectation: string, assertion?: () => void) => void;
declare const expect: (actual: any) => { toBeTruthy: () => void };

describe('ListManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListManagerService]
    });
  });

  it('should be created', inject([ListManagerService], (service: ListManagerService) => {
    expect(service).toBeTruthy();
  }));
});
