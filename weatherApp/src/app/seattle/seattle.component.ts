import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'


@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
	cityData : any;
  constructor(private _http: HttpService) { }

  ngOnInit() {
  	let observable = this._http.getCity('seattle')
  	observable.subscribe(data =>{
  		console.log(data)
  	})
  }

}
