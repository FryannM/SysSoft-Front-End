import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColaboradoresRoutingModule } from './colaboradores-routing.module';
import { ColaboradoresLitComponent } from './colaboradores-lit/colaboradores-lit.component';
import { ColaboradoresComponent } from './pages/colaboradores/colaboradores.component';
import { ColaboradoresFormComponent } from './pages/colaboradores-form/colaboradores-form.component';
import { ColaboradoresService } from './colaboradores.service';
import { PartialsModule } from '../../views/partials/partials.module';


@NgModule({
  declarations: [
    ColaboradoresLitComponent,
    ColaboradoresComponent,
    ColaboradoresFormComponent],
  imports: [
    PartialsModule,
    ColaboradoresRoutingModule
  ],
  providers: [ColaboradoresService]
})
export class ColaboradoresModule { }
