import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  displayLogin = false;
  displaySignup = false;
  displayHome = false;
  openLogin(){
    this.displayLogin = true;
    this.displayHome = false;
    this.displaySignup = false;
    console.log("login")
  }
  openSignup(){
    this.displayLogin = false;
    this.displayHome = false;
    this.displaySignup = true;
  }
  openHome(){
    this.displayLogin = false;
    this.displayHome = true;
    this.displaySignup = false;
  }
}
