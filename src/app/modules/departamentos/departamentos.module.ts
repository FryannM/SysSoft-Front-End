import { NgModule } from '@angular/core';
import { DepartamentosRoutingModule } from './departamentos-routing.module';
import { DepartamentosListComponent } from './departamentos-list/departamentos-list.component';
import { PartialsModule } from '../../views/partials/partials.module';
import { DepartamentosHomeComponent } from './pages/departamentos-home/departamentos-home.component';
import { DepartamentosFormComponent } from './pages/departamentos-form/departamentos-form.component';
import { DepartamentosComponent } from './pages/departamentos/departamentos.component';
import { DepartamentosService } from './departamentos.service';


@NgModule({
  declarations: [
    DepartamentosListComponent,
    DepartamentosHomeComponent,
    DepartamentosFormComponent, 
    DepartamentosComponent],
  imports: [
    PartialsModule,
    DepartamentosRoutingModule
  ],
  providers:[DepartamentosService]
})
export class DepartamentosModule { }
