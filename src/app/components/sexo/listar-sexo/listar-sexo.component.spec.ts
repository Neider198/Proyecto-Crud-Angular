import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSexoComponent } from './listar-sexo.component';

describe('ListarSexoComponent', () => {
  let component: ListarSexoComponent;
  let fixture: ComponentFixture<ListarSexoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarSexoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSexoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
