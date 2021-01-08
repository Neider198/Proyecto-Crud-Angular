import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearUsuariosComponent } from './components/usuarios/crear-usuarios/crear-usuarios.component';
import { ListarUsuariosComponent } from './components/usuarios/listar-usuarios/listar-usuarios.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { ListarTipoIdentificacionComponent } from './components/tipo-identificacion/listar-tipo-identificacion/listar-tipo-identificacion.component';
import { CrearTipoIdentificacionComponent } from './components/tipo-identificacion/crear-tipo-identificacion/crear-tipo-identificacion.component';
import { ConfirmacionModalComponent } from './components/confirmacion-modal/confirmacion-modal.component';
import { BotonAccionesComponent } from './components/boton-acciones/boton-acciones.component';
import { ListarSexoComponent } from './components/sexo/listar-sexo/listar-sexo.component';
import { CrearSexoComponent } from './components/sexo/crear-sexo/crear-sexo.component';


@NgModule({
  declarations: [
    AppComponent,
    CrearUsuariosComponent,
    ListarUsuariosComponent,
    HeaderComponent,
    SidenavComponent,
    InicioComponent,
    TablaComponent,
    ListarTipoIdentificacionComponent,
    CrearTipoIdentificacionComponent,
    ConfirmacionModalComponent,
    BotonAccionesComponent,
    ListarSexoComponent,
    CrearSexoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
