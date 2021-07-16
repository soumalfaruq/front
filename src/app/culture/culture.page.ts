import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { DataServiceService } from '../data-service.service';
import { DonneesService } from '../donnees.service';

@Component({
  selector: 'app-culture',
  templateUrl: './culture.page.html',
  styleUrls: ['./culture.page.scss'],
})
export class CulturePage implements OnInit {
public place;
public url:string="/places";
  constructor(private nav:NavController,
    private service:DataServiceService,private data:DonneesService) { 
    }

  ngOnInit() {
      this.place=this.data.culture;
  }

}
