import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mae } from './mae';

describe('Mae', () => {
  let component: Mae;
  let fixture: ComponentFixture<Mae>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mae],
    }).compileComponents();

    fixture = TestBed.createComponent(Mae);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
