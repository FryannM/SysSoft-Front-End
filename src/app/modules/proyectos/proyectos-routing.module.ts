import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProyectosHomeComponent } from './proyectos-home/proyectos-home.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ProyectosFormComponent } from './proyectos-form/proyectos-form.component';


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
    // {
    //   path: 'edit',
    // },
    // {
    //   path: 'edit/:id',
    // }
  ],
}];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectosRoutingModule { }
