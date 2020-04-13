import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TareasComponent } from './pages/tareas/tareas.component';


const routes: Routes = [{
  path:'',
  component:TareasComponent,
  children: [{
    path:'',
    component:TareasComponent
  }]
  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareasRoutingModule { }
