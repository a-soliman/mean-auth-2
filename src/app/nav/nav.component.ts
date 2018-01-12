import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
	@Input() user;
	@Output() dologout = new EventEmitter();

		constructor() { }

	  	ngOnInit() {
	  		console.log('NAV: ', this.user);
	  	}

	  	logout() {
	  		console.log('logging out.')
	  		this.dologout.emit("logout");
	  	}

}
