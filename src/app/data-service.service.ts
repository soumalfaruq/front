import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
 public host:string="https://localhost:8081";
 public images:string="http://localhost:8081/images/";
 public id:number;
 public commande;
  constructor(private http:HttpClient) { }

  public getResource(url){
    return this.http.get("http://localhost:8081"+url);
}
public getPicture(){
  return this.http.get("http://localhost:8081/images");
}
}
