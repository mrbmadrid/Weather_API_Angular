import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SeattleComponent } from './seattle/seattle.component';
import { BurbankComponent } from './burbank/burbank.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { DcComponent } from './dc/dc.component';
import { DallasComponent } from './dallas/dallas.component';
import { ChicagoComponent } from './chicago/chicago.component';

@NgModule({
  declarations: [
    AppComponent,
    SeattleComponent,
    BurbankComponent,
    SanjoseComponent,
    DcComponent,
    DallasComponent,
    ChicagoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
