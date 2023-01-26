import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { FlightModel } from '../flight/flight.model';

@Component({
  selector: 'app-ponuda',
  templateUrl: './ponuda.component.html',
  styleUrls: ['./ponuda.component.scss']
})
export class PonudaComponent{
  
  constructor(private appComponent: AppComponent){}

  flights = this.appComponent.flights;

}
