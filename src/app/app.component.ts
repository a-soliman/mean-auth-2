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
	
	constructor( private logoutService: LogoutService ) {}

	ngOnInit() {
		this.user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
	}

	getUser(user) {
		this.user = user;
		localStorage.setItem('user', JSON.stringify(this.user));
	}

	@Output() logout( confirmation ) {
		if ( confirmation !== 'logout') { return; }

		console.log('app component asked to logout')
		this.logoutService.logout()
			.subscribe((res) => {
				if ( res.success === true ) {
					this.getUser(null);
					return;
				}
				console.log('An error has occurred.');
			})


	}



}
