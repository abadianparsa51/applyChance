import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementsDialogComponent } from './requirements-dialog.component';

describe('RequirementsDialogComponent', () => {
  let component: RequirementsDialogComponent;
  let fixture: ComponentFixture<RequirementsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequirementsDialogComponent]
    });
    fixture = TestBed.createComponent(RequirementsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
