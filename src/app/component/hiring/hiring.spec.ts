import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hiring } from './hiring';

describe('Hiring', () => {
  let component: Hiring;
  let fixture: ComponentFixture<Hiring>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hiring],
    }).compileComponents();

    fixture = TestBed.createComponent(Hiring);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
