import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  public typeProduct;
  public product;
  public urlc:string="/productType";
  public urlp:string="/product";
  public nbr:number=0;
  public hidden:boolean=true;
  public commandeProduct=[];
  constructor( private service:DataServiceService,private nav: NavController) { }

  ngOnInit() {
    this.service.getResource(this.urlc)
    .subscribe(data=>{
      this.typeProduct=data;
    },err=>{
      console.log(err);
    });
    this.service.getResource(this.urlp)
    .subscribe(data=>{
      this.product=data;
    },err=>{
      console.log(err);
    });
  }

  chargerProduct(pr:any){
    this.product=pr;
  }
    addProduct(cp:any){
      this.hidden=false;
      this.commandeProduct.push(cp);
      this.nbr=this.commandeProduct.length;
    }
    finishCommande(){
      this.service.commande=this.commandeProduct;
      this.nav.navigateForward('/commande');
    };
    cancelCommande(){
      this.hidden=true;
      this.service.commande.length=0;
      console.log(this.service.commande);
    };
}
