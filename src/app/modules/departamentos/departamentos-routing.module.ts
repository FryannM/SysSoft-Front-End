import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartamentosHomeComponent } from './pages/departamentos-home/departamentos-home.component';
import { DepartamentosComponent } from './pages/departamentos/departamentos.component';
import { DepartamentosFormComponent } from './pages/departamentos-form/departamentos-form.component';
import { DepartamentoEditComponent } from './pages/departamento-edit/departamento-edit.component';


const routes: Routes = [{
  path: '',
  component: DepartamentosHomeComponent,
  children: [
    {
      path: '',
      component: DepartamentosComponent
    }, {
      path: 'new',
      component: DepartamentosFormComponent
    },{
      path: 'edit/:id',
      component: DepartamentoEditComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartamentosRoutingModule { }
