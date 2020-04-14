import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PosicionComponent } from './pages/posicion/posicion.component';
import { PosicionHomeComponent } from './pages/posicion-home/posicion-home.component';


const routes: Routes = [{
  path: '',
  component: PosicionHomeComponent,
  children: [{
    path: '',
    component: PosicionComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosicionRoutingModule { }
