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
  public commande=[];
  public user;
  public hidden:boolean=false;
  constructor(private service:DataServiceService,private nav:NavController) { }

  ngOnInit() {
    this.commande=this.service.commande;
  }
  cancelCommande(){
    this.service.commande=[];
    this.nav.navigateForward('menu/home');
  };
  finishCommande(){
    this.nav.navigateForward('menu/home');
  };
  commandes(com){
this.user=com;
this.hidden=true;
  }

  plus(index){
    index.quantity=index.quantity+1
  }
  mois(index){
    index.quantity=index.quantity-1
  }
}
