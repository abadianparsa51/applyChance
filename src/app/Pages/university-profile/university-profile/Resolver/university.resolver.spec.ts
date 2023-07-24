import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { universityResolver } from './university.resolver';

describe('universityResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => universityResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
