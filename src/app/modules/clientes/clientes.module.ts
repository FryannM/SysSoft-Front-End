import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ClientesFormComponent } from './pages/clientes-form/clientes-form.component';
import { ClientesHomeComponent } from './pages/clientes-home/clientes-home.component';
import { PartialsModule } from '../../views/partials/partials.module';
import { ClientesListComponent } from './clientes-list/clientes-list.component';
import { ClientesService } from './clientes.service';


@NgModule({
  declarations: [
    ClientesComponent,
    ClientesFormComponent,
    ClientesHomeComponent,
    ClientesListComponent
  ],
  providers:[ClientesService],

  imports: [
    PartialsModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
