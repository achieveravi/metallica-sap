import { TestBed, inject } from '@angular/core/testing';

import { TradeServiceService } from './trade-service.service';

describe('TradeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TradeServiceService]
    });
  });

  it('should be created', inject([TradeServiceService], (service: TradeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
