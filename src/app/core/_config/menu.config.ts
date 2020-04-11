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
							title: 'Colaboradores',
							bullet: 'dot',
							icon: 'flaticon-interface-7',
							submenu: [
								{
									title: 'Opciones Colaboradores',
									bullet: 'dot',
									submenu: [

										{
											title: 'Slider Toggle',
											page: '/material/form-controls/slidertoggle'
										}
									]
								},
								{
									title: 'Navigation',
									bullet: 'dot',
									submenu: [
										{
											title: 'Menu',
											page: '/material/navigation/menu'
										},
										{
											title: 'Sidenav',
											page: '/material/navigation/sidenav'
										},
										{
											title: 'Toolbar',
											page: '/material/navigation/toolbar'
										}
									]
								},


							]
						},
						{
							title: 'Teams',
							bullet: 'dot',
							icon: 'flaticon-web',
							submenu: [
								{
									title: 'Accordion',
									page: '/ngbootstrap/accordion'
								},

							]
						},
						{
							title: 'Posiciones',
							bullet: 'dot',
							icon: 'flaticon-web',
							submenu: [
								{
									title: 'Accordion',
									page: '/ngbootstrap/accordion'
								},

							]
						},
						{
							title: 'Departamentos',
							bullet: 'dot',
							icon: 'flaticon-web',
							submenu: [
								{
									title: 'Accordion',
									page: '/ngbootstrap/accordion'
								},

							]
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
								{
									title: 'Products',
									page: '/ecommerce/products'
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
					title: 'Colaboradores',
					root: true,
					bullet: 'dot',
					icon: 'flaticon-users-1',
					submenu: [
						{
							title: 'Proyectos',
							bullet: 'dot',
							page: '/proyectos'

						},
						{
							title: 'Teams',
							bullet: 'dot',

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
							page: '/ngbootstrap/typehead'
						}
					]
				},
				{ section: 'Seguridad' },
				{
					title: 'Tareas',
					bullet: 'dot',
					icon: 'flaticon2-list-2',
					root: true,
					permission: 'accessToECommerceModule',
					submenu: [
						{
							title: 'Items',
							page: '/ecommerce/customers'
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
				{ section: 'Custom' },
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
