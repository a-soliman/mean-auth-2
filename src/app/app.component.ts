import { Component, OnInit } from '@angular/core';

import { SimpleService } from './services/simple.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ SimpleService ]
})

export class AppComponent {
	
	title = 'MEAN BOILERPLATE';
	
	constructor( private simpleService: SimpleService ) {}

	ngOnInit() {
		this.simpleService.getResult()
			.subscribe((res) => {
				console.log(res);
			})
	}

}
