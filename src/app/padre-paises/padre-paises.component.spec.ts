import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadrePaisesComponent } from './padre-paises.component';

describe('PadrePaisesComponent', () => {
  let component: PadrePaisesComponent;
  let fixture: ComponentFixture<PadrePaisesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PadrePaisesComponent]
    });
    fixture = TestBed.createComponent(PadrePaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
