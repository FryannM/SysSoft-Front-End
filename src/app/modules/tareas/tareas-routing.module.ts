import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TareasComponent } from './pages/tareas/tareas.component';
import { TareasHomeComponent } from './pages/tareas-home/tareas-home.component';
import { TareasFormComponent } from './pages/tareas-form/tareas-form.component';
import { TareasEditComponent } from './pages/tareas-edit/tareas-edit.component';


const routes: Routes = [{
  path: '',
  component: TareasHomeComponent,
  children: [{
    path: '',
    component: TareasComponent
  },
  {
    path: 'new',
    component: TareasFormComponent
  },
  {
    path: 'edit/:id',
    component: TareasEditComponent
  }]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareasRoutingModule { }
