import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DonneesService } from '../donnees.service';
import { Pipe, PipeTransform } from '@angular/core';
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
  public flag:boolean=false;
  public commandeProduct=[];
  constructor( private service:DataServiceService,private nav: NavController,private data:DonneesService) {
    this.flag=false;
   }

  ngOnInit() {

      this.typeProduct=this.data.productType
      this.product=this.data.product;
   
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
      this.nbr=0;
      this.hidden=true;
      this.service.commande.length=0;
      console.log(this.service.commande);
    };
    changeFuncWorking() {
      if(this.flag==true){
        this.product=this.product.sort((a, b) => a.numberSeller - b.numberSeller);
      }else{
        this.product=this.data.product;
      }
    }
    onInput(event:any){
      this.product
    }
}
