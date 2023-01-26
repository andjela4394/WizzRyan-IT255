import { Component } from '@angular/core';
import { FlightModel } from '../flight/flight.model';

@Component({
  selector: 'app-preporuka',
  templateUrl: './preporuka.component.html',
  styleUrls: ['./preporuka.component.scss']
})
export class PreporukaComponent {
  flight = new FlightModel("Beograd", "Pariz", "10AM");

}
