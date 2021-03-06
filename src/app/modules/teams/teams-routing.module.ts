import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './pages/teams/teams.component';
import { TeamsFormComponent } from './pages/teams-form/teams-form.component';
import { TeamsHomeComponent } from './pages/teams-home/teams-home.component';
import { TeamsEditComponent } from './pages/teams-edit/teams-edit.component';


const routes: Routes = [{
  path: '',
  component: TeamsHomeComponent,
  children: [{
    path: '',
    component: TeamsComponent,

  }, {
    path: 'new',
    component: TeamsFormComponent
  }, {
    path: 'edit/:id',
    component: TeamsEditComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
