import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColaboradoresComponent } from './pages/colaboradores/colaboradores.component';


const routes: Routes = [{
  path: '',
  component: ColaboradoresComponent,
  children: [{
    path: '',
    component: ColaboradoresComponent
  }]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColaboradoresRoutingModule { }
