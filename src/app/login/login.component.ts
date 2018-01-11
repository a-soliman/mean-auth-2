import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	loginForm: FormGroup;
	post: any;
	username: string = '';

	constructor( private fb: FormBuilder ) { 
		this.loginForm = fb.group({
			'username': [ null, Validators.compose([ Validators.required , Validators.minLength(2) ])],
			'password': [ null, Validators.compose([ Validators.required, Validators.minLength(6) ])]
		});
	}

	ngOnInit() {
	}

	login( userInfo ) {
		this.username = userInfo.username;
		console.log(userInfo);

		this.loginForm.reset();
	}

}
