import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class SimpleService {

	result: any;
  	
  	constructor( private http: Http ) { }

  	getResult() {
  		return this.http.get("/api")
  			.map(res => res.json());
  	}

}
