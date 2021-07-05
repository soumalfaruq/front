import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

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
  constructor(  private service:DataServiceService) { }

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
  Ajouter(){
    this.nbr=this.nbr+1;
  };
}
