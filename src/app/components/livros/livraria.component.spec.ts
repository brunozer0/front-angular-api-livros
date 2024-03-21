import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrariaComponent } from './livraria.component';

describe('LivrariaComponent', () => {
  let component: LivrariaComponent;
  let fixture: ComponentFixture<LivrariaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivrariaComponent]
    });
    fixture = TestBed.createComponent(LivrariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
