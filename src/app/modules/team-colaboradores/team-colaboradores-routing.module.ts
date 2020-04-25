import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamColaboradorHomComponent } from './pages/team-colaborador-hom/team-colaborador-hom.component';
import { TeamColaboradorComponent } from './pages/team-colaborador/team-colaborador.component';
import { TeamColaboradorFormComponent } from './pages/team-colaborador-form/team-colaborador-form.component';
import { TeamsEditComponent } from '../teams/pages/teams-edit/teams-edit.component';


const routes: Routes = [{

  path: '',
  component: TeamColaboradorHomComponent,
  children: [{
    path: '',
    component: TeamColaboradorComponent
  },
  {
    path: 'new',
    component: TeamColaboradorFormComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamColaboradoresRoutingModule { }
