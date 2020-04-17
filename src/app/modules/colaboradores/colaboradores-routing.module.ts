import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColaboradoresComponent } from './pages/colaboradores/colaboradores.component';
import { ColaboradoresEditComponent } from './pages/colaboradores-edit/colaboradores-edit.component';
import { ColaboradoresFormComponent } from './pages/colaboradores-form/colaboradores-form.component';
import { ColaboradorHomeComponent } from './pages/colaborador-home/colaborador-home.component';


const routes: Routes = [{
  path: '',
  component:  ColaboradorHomeComponent,
  children: [{
    path: '',
    component: ColaboradoresComponent
  },
  {
    path:'new',
    component:ColaboradoresFormComponent
  },
  {
    path: 'edit/:id',
    component: ColaboradoresEditComponent

  }]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColaboradoresRoutingModule { }
