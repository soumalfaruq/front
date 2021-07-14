import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.page.html',
  styleUrls: ['./commande.page.scss'],
})
export class CommandePage implements OnInit {
  public product;
  public food;
  public com:string="";
  public commandePost;
  public commande;
  constructor(private service:DataServiceService,private nav:NavController) { }

  ngOnInit() {
    this.commande=this.service.commande;
    console.log(this.commande);
  }
  cancelCommande(){
    this.service.commande=[];
    this.nav.navigateForward('menu/home');
  };
  finishCommande(){
    this.nav.navigateForward('menu/home');
  };
}
