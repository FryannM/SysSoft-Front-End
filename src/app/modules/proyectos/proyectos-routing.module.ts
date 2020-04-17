import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProyectosHomeComponent } from './proyectos-home/proyectos-home.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ProyectosFormComponent } from './proyectos-form/proyectos-form.component';
import { ProyectosEditComponent } from './pages/proyectos-edit/proyectos-edit.component';


const routes: Routes = [{

  path: '',
  component: ProyectosHomeComponent,
  children: [
    {
      path: '',
      component: ProyectosComponent
    },
    {
      path: 'new',
      component: ProyectosFormComponent
    },
    {
      path: 'edit/:id',
      component:ProyectosEditComponent
    }
  ],
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectosRoutingModule { }
