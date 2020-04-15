import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PosicionComponent } from './pages/posicion/posicion.component';
import { PosicionHomeComponent } from './pages/posicion-home/posicion-home.component';
import { PosicionFormComponent } from './pages/posicion-form/posicion-form.component';


const routes: Routes = [{
  path: '',
  component: PosicionHomeComponent,
  children: [{
    path: '',
    component: PosicionComponent
  },{
    path:'new',
    component:PosicionFormComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosicionRoutingModule { }
