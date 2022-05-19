import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillSeccionComponent } from './skill-seccion.component';

describe('SkillSeccionComponent', () => {
  let component: SkillSeccionComponent;
  let fixture: ComponentFixture<SkillSeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillSeccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
