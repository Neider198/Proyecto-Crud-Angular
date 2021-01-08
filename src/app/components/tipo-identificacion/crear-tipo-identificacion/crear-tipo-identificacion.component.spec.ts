import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTipoIdentificacionComponent } from './crear-tipo-identificacion.component';

describe('CrearTipoIdentificacionComponent', () => {
  let component: CrearTipoIdentificacionComponent;
  let fixture: ComponentFixture<CrearTipoIdentificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearTipoIdentificacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTipoIdentificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
