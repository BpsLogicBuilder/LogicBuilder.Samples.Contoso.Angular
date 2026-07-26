import { TestBed, inject } from '@angular/core/testing';

import { UiNotificationService } from './ui-notification.service';

declare const describe: (description: string, specDefinitions: () => void) => void;
declare const beforeEach: (action: () => void) => void;
declare const it: (expectation: string, assertion?: () => void) => void;
declare const expect: (actual: any) => { toBeTruthy: () => void };

describe('UiNotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UiNotificationService]
    });
  });

  it('should be created', inject([UiNotificationService], (service: UiNotificationService) => {
    expect(service).toBeTruthy();
  }));
});
