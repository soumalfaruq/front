import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.page.html',
  styleUrls: ['./user-creation.page.scss'],
})
export class UserCreationPage implements OnInit {
public usernam;
public password;
public name;
public mail;
  constructor(private router:Router) { }

  ngOnInit() {
  }
creation(user){
  localStorage.setItem("username", user.user);
  localStorage.setItem("pass", user.pass);
  localStorage.setItem("mail", user.mail);
  localStorage.setItem("name", user.name);
  this.router.navigateByUrl("/login");
}
}
