import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
	@Input() user;
	@Output() dologout = new EventEmitter();
	@Output('navRoute') navRoute = new EventEmitter(); 

		constructor() { }

	  	ngOnInit() {}

	  	logout() {
	  		console.log('logging out.')
	  		this.dologout.emit("logout");
	  	}

	  	changeRoute( route ) {
	  		console.log('sending ', route)
	  		this.navRoute.emit(route);
	  	}

}
