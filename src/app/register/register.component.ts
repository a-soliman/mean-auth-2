import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	registerForm: FormGroup;
	post: any;
	description: string = '';
	name: string = '';

	constructor( private fb: FormBuilder) { 
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

		console.log(userInfo);
		this.registerForm.reset();
	}

}
