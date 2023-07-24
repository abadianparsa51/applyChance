import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindInLocationComponent } from './find-in-location.component';

describe('FindInLocationComponent', () => {
  let component: FindInLocationComponent;
  let fixture: ComponentFixture<FindInLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindInLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindInLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
