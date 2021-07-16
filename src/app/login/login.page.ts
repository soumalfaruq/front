import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private aut:AuthentificationService, private router:Router) { }

  ngOnInit() {
  }
  login(user){
  let re=this.aut.log(user.user, user.pass);
  if(re==true){
    this.router.navigateByUrl('/menu/home')
  }else{
    this.router.navigateByUrl('login')
  }
  }

}
