import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorsOfUniversityComponent } from './professors-of-university.component';

describe('ProfessorsOfUniversityComponent', () => {
  let component: ProfessorsOfUniversityComponent;
  let fixture: ComponentFixture<ProfessorsOfUniversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorsOfUniversityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorsOfUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
