import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipoIdentificacionComponent } from './listar-tipo-identificacion.component';

describe('ListarTipoIdentificacionComponent', () => {
  let component: ListarTipoIdentificacionComponent;
  let fixture: ComponentFixture<ListarTipoIdentificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarTipoIdentificacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTipoIdentificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
