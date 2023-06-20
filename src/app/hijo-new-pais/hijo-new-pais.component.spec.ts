import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoNewPaisComponent } from './hijo-new-pais.component';

describe('HijoNewPaisComponent', () => {
  let component: HijoNewPaisComponent;
  let fixture: ComponentFixture<HijoNewPaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HijoNewPaisComponent]
    });
    fixture = TestBed.createComponent(HijoNewPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
