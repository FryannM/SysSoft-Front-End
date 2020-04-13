import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { TareasListComponent } from './tareas-list/tareas-list.component';
import { TareasFormComponent } from './pages/tareas-form/tareas-form.component';
import { TareasHomeComponent } from './pages/tareas-home/tareas-home.component';
import { TareasComponent } from './pages/tareas/tareas.component';
import { PartialsModule } from '../../views/partials/partials.module';
import { TareasService } from './tareas.service';


@NgModule({
  declarations: [
    TareasListComponent, 
    TareasFormComponent, 
    TareasHomeComponent, 
    TareasComponent],
  imports: [
    PartialsModule,
    TareasRoutingModule
  ],
  providers:[TareasService]
})
export class TareasModule { }
