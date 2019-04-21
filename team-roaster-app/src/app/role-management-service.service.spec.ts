import { TestBed } from '@angular/core/testing';

import { RoleManagementServiceService } from './role-management-service.service';

describe('RoleManagementServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoleManagementServiceService = TestBed.get(RoleManagementServiceService);
    expect(service).toBeTruthy();
  });
});
