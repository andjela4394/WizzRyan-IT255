import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Flight } from '../flight/flight.model';

@Component({
  selector: 'app-ponuda',
  templateUrl: './ponuda.component.html',
  styleUrls: ['./ponuda.component.scss']
})
export class PonudaComponent{
  
  appComponent:AppComponent = new AppComponent;
  flights = this.appComponent.flights;

}
