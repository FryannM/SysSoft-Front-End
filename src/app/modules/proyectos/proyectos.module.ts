import { NgModule } from '@angular/core';

import { ProyectosRoutingModule } from './proyectos-routing.module';
import { PartialsModule } from '../../views/partials/partials.module';
import { ProyectosListComponent } from './proyectos-list/proyectos-list.component';
import { ProyectosHomeComponent } from './proyectos-home/proyectos-home.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ProyectosService } from './proyectos.service';

@NgModule({
  declarations: [
    ProyectosHomeComponent,
    ProyectosComponent,
    ProyectosListComponent
  ],
  imports: [
    PartialsModule,
    ProyectosRoutingModule,
    
  ],
  providers: [ProyectosService],
})
export class ProyectosModule { }
