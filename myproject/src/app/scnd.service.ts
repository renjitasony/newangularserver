import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScndService {

  constructor(private hc:HttpClient) { }
  public getData(){
    let url = "http://localhost:8083/data";
    return this.hc.get(url);
  }
}
