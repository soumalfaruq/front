import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
public connected:boolean;
public token:string;
  constructor(private router:Router) { }
public log(username:string, password:string){
  if((username=="test" && password=="test")||(username==localStorage.getItem("username") && username==localStorage.getItem("pass"))){
    this.connected=true;
    this.saveToken();
  }else{
    this.connected=false;
  }
  return this.connected;
}
private saveToken(){
  this.token="testeur";
  localStorage.setItem("theToken",this.token);
}
public chargerUser(){
this.token=localStorage.getItem("theToken")
if(this.token=="testeur"){
this.connected=true;
}else{
  this.connected=false;
}
  return this.connected;
}
logout(){
  localStorage.removeItem("theToken");
  this.router.navigateByUrl("/login");
}
}
