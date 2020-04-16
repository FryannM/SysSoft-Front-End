import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioHomeComponent } from './pages/usuario-home/usuario-home.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { UsuarioFormComponent } from './pages/usuario-form/usuario-form.component';


const routes: Routes = [{
  path: '',
  component: UsuarioHomeComponent,
  children: [
    {
      path: '',
      component: UsuarioComponent
    },
    {
      path: 'new',
      component: UsuarioFormComponent
    }, {
      path: 'edit/: id',
      component: UsuarioFormComponent
    }
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
