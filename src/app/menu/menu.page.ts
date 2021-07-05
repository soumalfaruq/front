import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

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
    {title:"Music", url:"/menu/music", icon:"musical-notes"}
]
  constructor(private router:Router) { }  
  ngOnInit() {}

  onMenuNavigate(m){
    this.router.navigateByUrl(m.url);
  }
}
