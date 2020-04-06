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
					title: 'Applications',
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
							title: 'User Management',
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
					title: 'Custom',
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
								{
									title: 'Error 2',
									page: '/error/error-v2'
								},
								{
									title: 'Error 3',
									page: '/error/error-v3'
								},
								{
									title: 'Error 4',
									page: '/error/error-v4'
								},
								{
									title: 'Error 5',
									page: '/error/error-v5'
								},
								{
									title: 'Error 6',
									page: '/error/error-v6'
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
								{
									title: 'Wizard 2',
									page: '/wizard/wizard-2'
								},
								{
									title: 'Wizard 3',
									page: '/wizard/wizard-3'
								},
								{
									title: 'Wizard 4',
									page: '/wizard/wizard-4'
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
				{section: 'Modulos'},
				{
					title: 'Colaboradores',
					root: true,
					bullet: 'dot',
					icon: 'flaticon-users-1',
					submenu: [
						{
							title: 'Proyectos',
							bullet: 'dot',
							
						},
						{
							title: 'Teams',
							bullet: 'dot',
							
						},
						{
							title: 'Posiciones',
							bullet: 'dot',
							page:''
							
						},
						{
							title: 'Departamentos',
							bullet: 'dot',
							page:''
							
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
				{section: 'Seguridad'},
				{
					title: 'eCommerce',
					bullet: 'dot',
					icon: 'flaticon2-list-2',
					root: true,
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
					title: 'User Management',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-user-outline-symbol',
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
				{section: 'Custom'},
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
