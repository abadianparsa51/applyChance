import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityProfileComponent } from './university-profile.component';

describe('UniversityProfileComponent', () => {
  let component: UniversityProfileComponent;
  let fixture: ComponentFixture<UniversityProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversityProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
