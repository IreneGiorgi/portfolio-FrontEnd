import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraRedesComponent } from './barra-redes.component';

describe('BarraRedesComponent', () => {
  let component: BarraRedesComponent;
  let fixture: ComponentFixture<BarraRedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraRedesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraRedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
