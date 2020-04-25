import { NgModule } from '@angular/core';
import { TeamColaboradoresRoutingModule } from './team-colaboradores-routing.module';
import { TeamColaboradorListComponent } from './team-colaborador-list/team-colaborador-list.component';
import { TeamColaboradorComponent } from './pages/team-colaborador/team-colaborador.component';
import { TeamColaboradorFormComponent } from './pages/team-colaborador-form/team-colaborador-form.component';
import { TeamColaboradorHomComponent } from './pages/team-colaborador-hom/team-colaborador-hom.component';
import { TeamColaboradorEditComponent } from './pages/team-colaborador-edit/team-colaborador-edit.component';
import { PartialsModule } from '../../views/partials/partials.module';
import { TeamColaboradorService } from './team-colaborador.service';


@NgModule({
  declarations: [
    TeamColaboradorListComponent,
    TeamColaboradorComponent,
    TeamColaboradorFormComponent,
    TeamColaboradorHomComponent,
    TeamColaboradorEditComponent],
  imports: [
    PartialsModule,
    TeamColaboradoresRoutingModule
  ],
  providers:[TeamColaboradorService]
})
export class TeamColaboradoresModule { }
