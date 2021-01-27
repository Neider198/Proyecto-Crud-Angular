import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListarTipoIdentificacionComponent } from './components/tipo-identificacion/listar-tipo-identificacion/listar-tipo-identificacion.component';
import { CrearTipoIdentificacionComponent } from './components/tipo-identificacion/crear-tipo-identificacion/crear-tipo-identificacion.component'
import { CrearUsuariosComponent } from './components/usuarios/crear-usuarios/crear-usuarios.component';
import { ListarUsuariosComponent } from './components/usuarios/listar-usuarios/listar-usuarios.component';
import { ListarSexoComponent } from './components/sexo/listar-sexo/listar-sexo.component';
import { CrearSexoComponent } from './components/sexo/crear-sexo/crear-sexo.component';
import { LoginComponent } from './components/login/login.component';
import { AutentifiacionGuard } from './guard/autentifiacion.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path:'login',
    component: LoginComponent 
  },
  {
    path:'inicio',
    component: InicioComponent,
    canActivate: [AutentifiacionGuard]
  },
  {
    path:'usuario',
    component: ListarUsuariosComponent,
    canActivate: [AutentifiacionGuard]
  },
  {
    path:'usuario/agregar',
    component: CrearUsuariosComponent,
    canActivate: [AutentifiacionGuard]
  },
  {
    path:'usuario/editar/:id',
    component: CrearUsuariosComponent,
    canActivate: [AutentifiacionGuard]
  },
  {
    path:'tipo-identificacion',
    component: ListarTipoIdentificacionComponent,
    canActivate: [AutentifiacionGuard]
  },
  {
    path:'tipo-identificacion/agregar',
    component: CrearTipoIdentificacionComponent,
    canActivate: [AutentifiacionGuard]
  },
  {
    path:'tipo-identificacion/editar/:id',
    component: CrearTipoIdentificacionComponent,
    canActivate: [AutentifiacionGuard]
  },
  {
    path:'sexo',
    component: ListarSexoComponent,
    canActivate: [AutentifiacionGuard]
  },
  {
    path:'sexo/agregar',
    component: CrearSexoComponent,
    canActivate: [AutentifiacionGuard]
  },
  {
    path:'sexo/editar/:id',
    component: CrearSexoComponent,
    canActivate: [AutentifiacionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
