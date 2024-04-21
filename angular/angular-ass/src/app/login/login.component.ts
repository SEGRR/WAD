import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  constructor() { }

  setform = false;
  username= ''
  password = ''
  submit(form: NgForm) { 
    this.setform = true
    this.username = form.value.username
    this.password = form.value.password
    console.log(form.value);    
} 

}
