import { TestBed } from '@angular/core/testing';

import { NgxIpv4HelperService } from './ngx-ipv4-helper.service';

describe('NgxIpv4HelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxIpv4HelperService = TestBed.get(NgxIpv4HelperService);
    expect(service).toBeTruthy();
  });
});
