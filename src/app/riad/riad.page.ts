import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-riad',
  templateUrl: './riad.page.html',
  styleUrls: ['./riad.page.scss'],
})
export class RiadPage implements OnInit {
  public url:string="/riads/";
  public riads;
  public note:number;
  constructor(private service:DataServiceService) { }

  ngOnInit() {
    this.service.getResource(this.url)
    .subscribe(data=>{
      this.riads=data;
      this.riads=this.riads._embedded.riads;
    },err=>{
      console.log(err);
    });

  }

}
