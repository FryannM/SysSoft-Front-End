import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProyectosListComponent } from './proyectos-list/proyectos-list.component';
import { ProyectosHomeComponent } from './proyectos-home/proyectos-home.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';


const routes: Routes = [{

  path: '',
  component: ProyectosHomeComponent,
  children: [
    {
      path: '',
      component: ProyectosComponent
    },
    // {
    //   path: 'new',
    // },
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
