import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { NavController } from '@ionic/angular';
import { DonneesService } from '../donnees.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {
  public nbr:number=0;
  public foods=[];
  public foodtype;
  public commandeFood=[];
  public hidden:boolean=true;
  public isToggled:boolean=false;
 
 public  filterTerm: string;
  constructor(  private service:DataServiceService,private nav: NavController,private data:DonneesService) {
    this.isToggled = false;
   }

  ngOnInit() {
    
      this.foodtype=this.data.foodtype;
      this.foods=this.data.food;
  }
  chargerFood(fbt:any){
    this.foods=fbt;
  }
  chargeFoodOrder(){
    if(this.isToggled==true){
      this.foods=this.foods.sort((a, b) => a.nbrVente - b.nbrVente);
    }else{
      this.foods=this.data.food;
    }
      
  }
  Ajouter(cp:any){
    let n;
    this.hidden=false;
    this.commandeFood.push(cp);
    n=this.commandeFood.length;
    this.nbr=n;
  };
  finishCommande(){
    this.service.num=1;
    this.service.commande=this.commandeFood;
    this.nav.navigateForward('/commande');
    
  };
  cancelCommande(){
    this.nbr=0;
    this.hidden=true;
    this.service.commande.length=0;
    this.nav.navigateForward('/menu/food');
  };
}
