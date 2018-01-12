import { Component, OnInit, Output } from '@angular/core';

import { LogoutService } from './services/logout.service';

import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ LogoutService ]
})

export class AppComponent {

	@Output() user: User = null;
	route: string = this.user ? 'members' : 'login';

	constructor( private logoutService: LogoutService ) {}

	ngOnInit() {
		this.user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
		this.route = this.user ? 'members' : 'login';
	}

	changeRoute( route ) {
		if ( route === 'logout' ) {
			this.logout();
		}
		console.log('getting ', route)
		this.route = route;
	}

	getUser(user) {
		this.user = user;
		localStorage.setItem('user', JSON.stringify(this.user));
		this.route = 'members';

	}

	logout() {
		console.log('app component asked to logout')
		this.logoutService.logout()
			.subscribe((res) => {
				if ( res.success === true ) {
					this.getUser(null);
					this.changeRoute('login')
					return;
				}
				console.log('An error has occurred.');
			})

	}



}
