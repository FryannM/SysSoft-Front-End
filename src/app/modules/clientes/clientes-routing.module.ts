import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ClientesFormComponent } from './pages/clientes-form/clientes-form.component';
import { ClientesHomeComponent } from './pages/clientes-home/clientes-home.component';
import { ClienteEditComponent } from './pages/cliente-edit/cliente-edit.component';


const routes: Routes = [{
  path: '',
  component: ClientesHomeComponent,
  children: [{
    path: '',
    component: ClientesComponent
  },{
    path:'new',
    component:ClientesFormComponent
  },{
    path:'edit/:id',
    component :ClienteEditComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
