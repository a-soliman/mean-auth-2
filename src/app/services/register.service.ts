import { Injectable } from '@angular/core';
import { Http, Headers, ResponseOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RegisterService {

	constructor( private http: Http ) { }

	register( userInfo ) {
		return this.http.post("/api/user/register", userInfo)
			.map(res => res.json());
	}

}
