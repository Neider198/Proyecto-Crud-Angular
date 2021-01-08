import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonAccionesComponent } from './boton-acciones.component';

describe('BotonAccionesComponent', () => {
  let component: BotonAccionesComponent;
  let fixture: ComponentFixture<BotonAccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonAccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonAccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
