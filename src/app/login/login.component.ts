import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})

export class LoginComponent implements OnInit {

	loginForm: FormGroup;
	post: any;
	username: string = '';
	serverValidationErrors: Array<any> = [];
	successMessage: string;

	constructor( private fb: FormBuilder,
				 private loginService: LoginService ) { 
		this.loginForm = fb.group({
			'username': [ null, Validators.compose([ Validators.required , Validators.minLength(2) ])],
			'password': [ null, Validators.compose([ Validators.required, Validators.minLength(6) ])]
		});
	}

	ngOnInit() {
	}

	login( userInfo ) {
		this.loginService.login(userInfo)
			.subscribe((res) => {
				if ( res.errors) {
					return this.serverValidationErrors = res.errors;
				}

				if ( res.success === false ) {
					return this.serverValidationErrors.push({msg: res.message})
				}
				if ( res.status === 'success') {
					this.successMessage = res.message;
					this.serverValidationErrors = [];
					this.loginForm.reset();
				}
				console.log(res);
				
			})
	}

}
