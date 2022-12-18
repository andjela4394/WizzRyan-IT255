import { Component } from '@angular/core';
import { Flight } from '../flight/flight.model';

@Component({
  selector: 'app-preporuka',
  templateUrl: './preporuka.component.html',
  styleUrls: ['./preporuka.component.scss']
})
export class PreporukaComponent {
  flight = new Flight("Beograd", "Pariz", "10AM");

}
