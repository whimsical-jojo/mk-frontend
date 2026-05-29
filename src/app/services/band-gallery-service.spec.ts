import { TestBed } from '@angular/core/testing';

import { BandGalleryService } from './band-gallery-service';

describe('BandGalleryService', () => {
  let service: BandGalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BandGalleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
