import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  public category;
  public product;
  public urlc:string="/productcategory";
  public urlp:string="/product";
  public nbr:number=0;
  constructor( private service:DataServiceService) { }

  ngOnInit() {
    this.service.getResource(this.urlc)
    .subscribe(data=>{
      this.category=data;
    },err=>{
      console.log(err);
    });
  }

}
