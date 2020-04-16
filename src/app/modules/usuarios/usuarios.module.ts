import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { UsuarioHomeComponent } from './pages/usuario-home/usuario-home.component';
import { UsuarioEditComponent } from './pages/usuario-edit/usuario-edit.component';
import { PartialsModule } from '../../views/partials/partials.module';
import { UsuarioService } from './usuario.service';
import { UsuarioFormComponent } from './pages/usuario-form/usuario-form.component';


@NgModule({
  declarations: [
    UsuarioListComponent,
     UsuarioComponent,
      UsuarioHomeComponent, 
      UsuarioEditComponent, UsuarioFormComponent],
  imports: [
    PartialsModule,
    UsuariosRoutingModule
  ],
  providers:[UsuarioService]
})
export class UsuariosModule { }
