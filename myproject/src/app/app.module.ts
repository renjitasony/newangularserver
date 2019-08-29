import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {ScndService} from './scnd.service'

import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [ScndService],
  bootstrap: [AppComponent]
})
export class AppModule { }
