import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ RegisterService ]
})

export class RegisterComponent implements OnInit {

	registerForm: FormGroup;
	post: any;
	description: string = '';
	name: string = '';

	serverValidationErrors: Array<any>;
	successMessage: string;

	constructor( private fb: FormBuilder,
				 private registerService: RegisterService ) { 
		this.registerForm = fb.group({
			'name': [ null, Validators.compose([ Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
			'email': [ null, Validators.compose([ Validators.required, Validators.email])],
			'username': [ null, Validators.compose([ Validators.required, Validators.minLength(2), Validators.maxLength(10)])],
			'password': [ null, Validators.compose([ Validators.required, Validators.minLength(6)])],
			'password2': [ null, Validators.compose([ Validators.required, Validators.minLength(6)])],
			'profileImage': [null]
		});
	}

	ngOnInit() {
	}

	register( userInfo ) {
		// check if password 2 is === password

		this.name = userInfo.name;
		this.description = userInfo.description;

		this.registerService.register(userInfo)
			.subscribe((res) => {
				if ( res.errors) {
					return this.serverValidationErrors = res.errors;
				}

				if ( res.status === 'success') {
					this.successMessage = res.message;
					this.registerForm.reset();
				}
				console.log(res);
			});

		
	}

}
