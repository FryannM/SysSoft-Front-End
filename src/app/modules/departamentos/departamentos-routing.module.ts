import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartamentosHomeComponent } from './pages/departamentos-home/departamentos-home.component';
import { DepartamentosComponent } from './pages/departamentos/departamentos.component';
import { DepartamentosFormComponent } from './pages/departamentos-form/departamentos-form.component';


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
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartamentosRoutingModule { }
