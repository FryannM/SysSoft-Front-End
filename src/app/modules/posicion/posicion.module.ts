import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosicionRoutingModule } from './posicion-routing.module';
import { PosicionListComponent } from './posicion-list/posicion-list.component';
import { PartialsModule } from '../../views/partials/partials.module';
import { PosicionComponent } from './pages/posicion/posicion.component';
import { PosicionHomeComponent } from './pages/posicion-home/posicion-home.component';
import { PosicionFormComponent } from './pages/posicion-form/posicion-form.component';
import { PosicionService } from './posicion.service';


@NgModule({
  declarations: [
    PosicionListComponent,
    PosicionComponent,
    PosicionHomeComponent,
    PosicionFormComponent],
  imports: [
    PartialsModule,
    PosicionRoutingModule
  ],
  providers: [PosicionService]
})
export class PosicionModule { }
