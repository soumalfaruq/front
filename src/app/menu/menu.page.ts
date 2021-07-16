import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
 
  public menus=[
    {title:"Home", url:"/menu/home",icon:"Home"},
    {title:"Store", url:"/menu/store",icon:"bag-handle"},
    {title:"Food", url:"/menu/food", icon:"pizza"},
    {title:"Riad", url:"/menu/riad", icon:"storefront-outline"},
    {title:"Historic Place", url:"/menu/culture", icon:"trail-sign"},
    {title:"Music", url:"/menu/music", icon:"musical-notes"},
    
]
  constructor(private router:Router, private aut:AuthentificationService) { }  
  ngOnInit() {}

  onMenuNavigate(m){
    if(!this.aut.connected){
      this.router.navigateByUrl("/login");
    }else{
      this.router.navigateByUrl(m.url);
    };
  
   }
  
  log(){
    if(!this.aut.connected){
     this.router.navigateByUrl("/login");
    }else{
      this.aut.logout();
    }
  }
}
