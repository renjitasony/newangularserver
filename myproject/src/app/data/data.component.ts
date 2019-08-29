import { Component, OnInit } from '@angular/core';
import {ScndService} from '../scnd.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  sdata;
  view:boolean;
  constructor(private srvr:ScndService) { }

  ngOnInit() {
    this.view = false;
  }
  public showData(){
    this.view = true;
    this.srvr.getData().subscribe(data=>{
      this.sdata = data;
      console.log(this.sdata[1].name);
      
    })
  }

}
