import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

import { ActionSheetController, Platform, AlertController } from '@ionic/angular';
import { DonneesService } from '../donnees.service';

@Component({
  selector: 'app-riad',
  templateUrl: './riad.page.html',
  styleUrls: ['./riad.page.scss'],
})
export class RiadPage implements OnInit {
 
  public riads;
  public note:number;

  constructor(private service:DataServiceService,public alertController: AlertController,
    public actionCtrl: ActionSheetController,
    private platform: Platform, private data:DonneesService) {     
    
  }
  
  ngOnInit() {
      this.riads=this.data.riads;
  }

}
