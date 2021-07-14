import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {
  public nbr:number=0;
  public urltf:string="/typefood";
  public urlf:string="/food";
  public urltop:string="/foodorder";
  public foods;
  public foodtype;
  public commandeFood=[];
  public hidden:boolean=true;
  constructor(  private service:DataServiceService,private nav: NavController) { }

  ngOnInit() {
    this.service.getResource(this.urltf)
    .subscribe(data=>{
      this.foodtype=data;
    },err=>{
      console.log(err);
    });
    this.service.getResource(this.urlf)
    .subscribe(data=>{
      this.foods=data;
    },err=>{
      console.log(err);
    });
  }
  chargerFood(fbt:any){
    this.foods=fbt;
  }
  chargeFoodOrder(){
    this.service.getResource(this.urltop)
    .subscribe(data=>{
      this.foods=data;
    },err=>{
      console.log(err);
    });
   console.log(this.foods);
  }
  Ajouter(cp:any){
    this.hidden=false;
    this.commandeFood.push(cp);
    this.nbr=this.commandeFood.length;
    this.nbr=this.nbr+1;
  };
  finishCommande(){
    this.service.commande=this.commandeFood;
    this.nav.navigateForward('/commande');
    
  };
  cancelCommande(){
    this.hidden=true;
    this.service.commande.length=0;
    console.log(this.service.commande);
  };
}
