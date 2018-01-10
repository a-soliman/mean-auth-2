import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { SimpleService } from './services/simple.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [SimpleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
