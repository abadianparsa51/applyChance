import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBoxingComponent } from './show-boxing.component';

describe('ShowBoxingComponent', () => {
  let component: ShowBoxingComponent;
  let fixture: ComponentFixture<ShowBoxingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBoxingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowBoxingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
