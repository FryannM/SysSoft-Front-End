import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErroresHomeComponent } from './pages/errores-home/errores-home.component';
import { ErroresComponent } from './pages/errores/errores.component';


const routes: Routes = [{
  path:'',
  component:ErroresHomeComponent,
  children:[{
    path:'',
    component:ErroresComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErroresRoutingModule { }
