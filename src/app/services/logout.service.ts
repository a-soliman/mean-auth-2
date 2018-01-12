import { Injectable } from '@angular/core';
import { Http, Headers, ResponseOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LogoutService {

	constructor( private http: Http ) { }

	logout() {
		return this.http.get("/api/user/logout")
			.map(res => res.json())
	}

}
