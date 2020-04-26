// Angular
import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
// RxJS
import { Observable } from 'rxjs';
// NGRX
import { select, Store } from '@ngrx/store';
// State
import { AppState } from '../../../../../core/reducers';
import { currentUser, Logout, User } from '../../../../../core/auth';
import { AuthService } from '../../../../../core/auth/_services/auth.service';

@Component({
	selector: 'kt-user-profile',
	templateUrl: './user-profile.component.html',
})


export class UserProfileComponent implements OnInit {
	// Public properties
	user$: Observable<User>;
	usuario$: User;
	 User :string;
	@Input() avatar = true;
	@Input() greeting = true;
	@Input() badge: boolean;
	@Input() icon: boolean;
	Usuario : any;

	
	@ViewChild('firstNameInput',null) nameInputRef: ElementRef;

	/**
	 * Component constructor
	 *
	 * @param store: Store<AppState>
	 */
	constructor(private store: Store<AppState>, private auth: AuthService) {


	}

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit(): void {

		this.user$ = this.store.pipe(select(currentUser));
		 this.usuario$ = this.auth.getSavedConfig()
		 const temp = JSON.parse(localStorage.getItem('usuarios'));
		this.Usuario =   temp.name
		this.nameInputRef = this.Usuario


		  
	}


	/**
	 * Log out
	 */
	logout() {
		this.store.dispatch(new Logout());
	}
}
