import { NgModule } from '@angular/core';

import { ProyectosRoutingModule } from './proyectos-routing.module';
import { PartialsModule } from '../../views/partials/partials.module';

import { ProyectosHomeComponent } from './proyectos-home/proyectos-home.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ProyectosService } from './proyectos.service';
import { ProyectosListComponent } from './proyectos-list/proyectos-list.component';
import { ProyectosFormComponent } from './proyectos-form/proyectos-form.component';
import { ProyectosEditComponent } from './pages/proyectos-edit/proyectos-edit.component';

@NgModule({
  declarations: [
    ProyectosHomeComponent,
    ProyectosComponent,
    ProyectosListComponent,
    ProyectosFormComponent,
    ProyectosEditComponent
  ],
  imports: [
    PartialsModule,
    ProyectosRoutingModule,
    
  ],
  providers: [ProyectosService],
})
export class ProyectosModule { }
