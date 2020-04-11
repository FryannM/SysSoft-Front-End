import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartamentosHomeComponent } from './pages/departamentos-home/departamentos-home.component';
import { DepartamentosComponent } from './pages/departamentos/departamentos.component';


const routes: Routes = [{
  path: '',
  component: DepartamentosHomeComponent,
  children:[
    {
path:'',
component: DepartamentosComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartamentosRoutingModule { }
