import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  setform = false
  email = ''
  fullName = ''
  password = ''
  cPassword =''
  travelFreq = ''
  gender = ''
  favPlaces = ''

    submit(form : NgForm){
      this.email = form.value.email
      this.setform = true
      this.fullName = form.value.fullName
      this.password  = form.value.password
      this.cPassword = form.value.cPassword
      this.gender = form.value.gender
      this.travelFreq = form.value.travelFreq
      this.favPlaces = form.value.places
      console.log(form.value)
    }
}
