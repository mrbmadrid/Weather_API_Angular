import { SeattleComponent } from './seattle/seattle.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { DcComponent } from './dc/dc.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'load/seattle',component: SeattleComponent },
  { path: 'load/chicago',component: ChicagoComponent },
  { path: 'load/washington',component: DcComponent },
  { path: 'load/burbank',component: BurbankComponent },
  { path: 'load/san jose',component: SanjoseComponent },
  { path: 'load/dallas',component: DallasComponent },
  { path: '', pathMatch: 'full', redirectTo: '/seattle' },
  // the ** will catch anything that did not match any of the above routes
  { path: '**', component: SeattleComponent }
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }