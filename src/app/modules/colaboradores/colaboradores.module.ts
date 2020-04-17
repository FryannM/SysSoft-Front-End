import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColaboradoresRoutingModule } from './colaboradores-routing.module';
import { ColaboradoresLitComponent } from './colaboradores-lit/colaboradores-lit.component';
import { ColaboradoresComponent } from './pages/colaboradores/colaboradores.component';
import { ColaboradoresFormComponent } from './pages/colaboradores-form/colaboradores-form.component';
import { ColaboradoresService } from './colaboradores.service';
import { PartialsModule } from '../../views/partials/partials.module';
import { ColaboradoresEditComponent } from './pages/colaboradores-edit/colaboradores-edit.component';
import { ProyectosService } from '../proyectos/proyectos.service';
import { UsuarioService } from '../usuarios/usuario.service';
import { ColaboradorHomeComponent } from './pages/colaborador-home/colaborador-home.component';
import { DepartamentosService } from '../departamentos/departamentos.service';


@NgModule({
  declarations: [
    ColaboradoresLitComponent,
    ColaboradoresComponent,
    ColaboradoresFormComponent,
    ColaboradoresEditComponent,
    ColaboradorHomeComponent],
  imports: [
    PartialsModule,
    ColaboradoresRoutingModule
  ],
  providers: [ColaboradoresService, ProyectosService, UsuarioService, DepartamentosService]
})
export class ColaboradoresModule { }
