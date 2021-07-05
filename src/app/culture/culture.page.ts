import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-culture',
  templateUrl: './culture.page.html',
  styleUrls: ['./culture.page.scss'],
})
export class CulturePage implements OnInit {
public place;
public url:string="/places";
  constructor(private nav:NavController,
    private service:DataServiceService) { 
    }

  ngOnInit() {
    this.service.getResource(this.url)
    .subscribe(data=>{
      this.place=data;
      this.place=this.place._embedded.places;
    },err=>{
      console.log(err);
    });
  }

}
