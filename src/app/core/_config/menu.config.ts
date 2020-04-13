export class MenuConfig {
	public defaults: any = {
		header: {
			self: {},
			items: [
				{
					title: 'Dashboards',
					root: true,
					alignment: 'left',
					page: '/dashboard',
					translate: 'MENU.DASHBOARD',
				},
				{
					title: 'Modulos',
					root: true,
					alignment: 'left',
					toggle: 'click',
					submenu: [
						{
							title: 'SysSoft Menu',
							bullet: 'dot',
							icon: 'flaticon-interface-7',
							submenu: [
								{
									title: 'Opciones Colaboradores',
									bullet: 'dot',
									page:'/colaboradores'
								},
							]
						},
						{
							title: 'Teams',
							bullet: 'dot',
							icon: 'flaticon-web',
							page:'/teams'
						},
						{
							title: 'Posiciones',
							bullet: 'dot',
							icon: 'flaticon-web',
							page:'/posiciones'
						},
						{
							title: 'Departamentos',
							bullet: 'dot',
							icon: 'flaticon-web',
							page:'/departamentos'
							
						},

						{
							title: 'Tareas',
							bullet: 'dot',
							icon: 'flaticon-web',
							page:'/tareas'
							
						},
					]
				},
				{
					title: 'Seguridad',
					root: true,
					alignment: 'left',
					toggle: 'click',
					submenu: [
						{
							title: 'Proyectos',
							bullet: 'dot',
							icon: 'flaticon-business',
							permission: 'accessToECommerceModule',
							submenu: [
								{
									title: 'Customers',
									page: '/ecommerce/customers'
								},
							]
						},
						{
							title: 'Configuracion Usuarios',
							bullet: 'dot',
							icon: 'flaticon-user',
							submenu: [
								{
									title: 'Users',
									page: '/user-management/users'
								},
								{
									title: 'Roles',
									page: '/user-management/roles'
								}
							]
						},
					]
				},
				{
					title: 'Log Sistema',
					root: true,
					alignment: 'left',
					toggle: 'click',
					submenu: [
						{
							title: 'Error Pages',
							bullet: 'dot',
							icon: 'flaticon2-list-2',
							submenu: [
								{
									title: 'Error 1',
									page: '/error/error-v1'
								},

							]
						},
						{
							title: 'Wizard',
							bullet: 'dot',
							icon: 'flaticon2-mail-1',
							submenu: [
								{
									title: 'Wizard 1',
									page: '/wizard/wizard-1'
								},
							]
						},
					]
				},
			]
		},
		aside: {
			self: {},
			items: [
				{
					title: 'Dashboard',
					root: true,
					icon: 'flaticon2-architecture-and-city',
					page: '/dashboard',
					translate: 'MENU.DASHBOARD',
					bullet: 'dot',
				},
				{ section: 'Modulos' },
				{
					title: 'SysSoftMenu',
					root: true,
					bullet: 'dot',
					icon: 'flaticon-interface-7',
					submenu: [
						{
							title: 'Proyectos',
							bullet: 'dot',
							page: '/proyectos'

						},
						{
							title: 'Teams',
							bullet: 'dot',
							page: '/teams'

						},
					
						{
							title: 'Posiciones',
							bullet: 'dot',
							page: '/posiciones'

						},
						{
							title: 'Departamentos',
							bullet: 'dot',
							page: '/departamentos'

						},
					]
				},
				{
					title: 'Clientes',
					root: true,
					bullet: 'dot',
					icon: 'flaticon-users-1',
					submenu: [

						{
							title: 'Mantenimientos',
							page: '/clientes'
						}
					]
				},
				{ section: 'Asignaciones' },
				{
					title: 'Tareas',
					bullet: 'dot',
					icon: 'flaticon2-menu-4',
					root: true,
					permission: 'accessToECommerceModule',
					submenu: [
						{
							title: 'Items',
							page: '/tareas'
						},
						{
							title: 'Products',
							page: '/ecommerce/products'
						},
					]
				},
				{
					title: 'Configuración usuarios',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-user-outline-symbol',
					submenu: [
						{
							title: 'Usuarios',
							page: '/user-management/users'
						},
						{
							title: 'Roles',
							page: '/user-management/roles'
						}
					]
				},
				{ section: 'Seguridad' },
				{
					title: 'Errores del Sistema',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-list-2',
					submenu: [
						{
							title: 'Error 6',
							page: '/error/error-v6'
						},
					]
				},
				{
					title: 'Wizard',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-mail-1',
					submenu: [
						{
							title: 'Wizard 4',
							page: '/wizard/wizard-4'
						},
					]
				},
			]
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}
