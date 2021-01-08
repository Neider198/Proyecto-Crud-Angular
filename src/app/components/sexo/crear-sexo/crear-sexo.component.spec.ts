import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSexoComponent } from './crear-sexo.component';

describe('CrearSexoComponent', () => {
  let component: CrearSexoComponent;
  let fixture: ComponentFixture<CrearSexoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearSexoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearSexoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
