// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { BaseComponent } from './views/theme/base/base.component';
import { ErrorPageComponent } from './views/theme/content/error-page/error-page.component';
// Auth
import { AuthGuard } from './core/auth';

const routes: Routes = [
	{ path: 'auth', loadChildren: () => import('../app/views/pages/auth/auth.module').then(m => m.AuthModule) },

	{
		path: '',
		component: BaseComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: 'dashboard',
				loadChildren: () => import('../app/views/pages/dashboard/dashboard.module').then(m => m.DashboardModule),
			},
			{
				path: 'proyectos',
				loadChildren: () => import('../app/modules/proyectos/proyectos.module').then(m => m.ProyectosModule)
			},
			{
				path: 'departamentos',
				loadChildren: () => import('../app/modules/departamentos/departamentos.module').then(m => m.DepartamentosModule)
			},
			{
				path: 'posiciones',
				loadChildren: () => import('../app/modules/posicion/posicion.module').then(x => x.PosicionModule)
			}, {
				path: 'teams',
				loadChildren: () => import('../app/modules/teams/teams.module').then(f => f.TeamsModule)
			},
			{
				path: 'tareas',
				loadChildren: () => import('../app/modules/tareas/tareas.module').then(f => f.TareasModule)
			},
			{
				path: 'clientes',
				loadChildren: () => import('../app/modules/clientes/clientes.module').then(f => f.ClientesModule)
			},
			{
				path: 'colaboradores',
				loadChildren: () => import('../app/modules/colaboradores/colaboradores.module').then(f => f.ColaboradoresModule)
			},
			{
				path:'usuarios',
				loadChildren:() => import('../app/modules/usuarios/usuarios.module').then( f => f.UsuariosModule)
			},
			{
				 path:'errores',
				 loadChildren:() => import('../app/modules/errores/errores.module').then( f => f.ErroresModule)
			},

			{
				path:'teamcolaboradores',
				loadChildren:() => import('../app/modules/team-colaboradores/team-colaboradores.module').then( f => f.TeamColaboradoresModule)
		   },
			{
				path: 'error/404',
				component: ErrorPageComponent,
				data: {
					type: 'error-v1',
					code: 404,
					title: '404... No Found',
					desc: 'OOPS! Algo Paso aqui no se ha encontrado la pagina',
				},
			},
			{ path: 'error/:type', component: ErrorPageComponent },
			{ path: '', redirectTo: 'error/404', pathMatch: 'full' },
			{ path: '**', redirectTo: 'error/404', pathMatch: 'full' },
		],
	},

	{ path: '**', redirectTo: 'error/403', pathMatch: 'full' },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {
}
