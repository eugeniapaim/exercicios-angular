import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateBinding } from './template-binding';

describe('TemplateBinding', () => {
  let component: TemplateBinding;
  let fixture: ComponentFixture<TemplateBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateBinding],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateBinding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
