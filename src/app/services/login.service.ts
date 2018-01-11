import { Injectable } from '@angular/core';
import { Http, Headers, ResponseOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

	constructor( private http: Http ) { }

	login( userInfo ) {
		return this.http.post("/api/user/login", userInfo)
			.map(res => res.json());
	}


}
