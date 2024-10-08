import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HochladenComponent } from './hochladen.component';

describe('HochladenComponent', () => {
  let component: HochladenComponent;
  let fixture: ComponentFixture<HochladenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HochladenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HochladenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
