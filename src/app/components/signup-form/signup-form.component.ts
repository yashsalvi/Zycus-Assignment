import { AuthService } from './../../service/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit{
  email!: string;
  password!: string;
  @ViewChild('f')
  signupForm!: NgForm;

  constructor(private authService:AuthService,
    ) { }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = ''; 
    this.signupForm.reset();
  }

  ngOnInit(): void {
  }

}
