import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { TeamsFormComponent } from './pages/teams-form/teams-form.component';
import { TeamsHomeComponent } from './pages/teams-home/teams-home.component';
import { PartialsModule } from '../../views/partials/partials.module';
import { TeamsService } from './teams.service';


@NgModule({
  declarations: [
    TeamsListComponent,
    TeamsComponent,
    TeamsFormComponent,
    TeamsHomeComponent],
  imports: [
    PartialsModule,
    TeamsRoutingModule
  ],
  providers:[TeamsService]
})
export class TeamsModule { }
