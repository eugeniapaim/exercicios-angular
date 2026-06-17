import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSignals } from './template-signals';

describe('TemplateSignals', () => {
  let component: TemplateSignals;
  let fixture: ComponentFixture<TemplateSignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateSignals],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateSignals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
