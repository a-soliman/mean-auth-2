import { Component, OnInit, Output } from '@angular/core';

import { SimpleService } from './services/simple.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ SimpleService ]
})

export class AppComponent {
	
	@Output() user: User = null;
	
	constructor( private simpleService: SimpleService ) {}

	ngOnInit() {
		this.user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
	}

	getUser(user) {
		this.user = user;
		localStorage.setItem('user', JSON.stringify(this.user));
	}



}
