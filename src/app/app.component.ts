import { Component } from '@angular/core';
import { Flight } from './flight/flight.model';
import { PonudaComponent } from './ponuda/ponuda.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  flights: Flight[]; //osobina komponente

  constructor() {
    this.flights = [
      new Flight('Beograd', 'Pariz', '10AM'),
      new Flight('Budimpešta', 'Porto', '6PM'),
      new Flight('Beograd', 'Madrid', '4PM'),
    ];
  }

  addFlight(polazak: HTMLInputElement, dolazak: HTMLInputElement, vremePoletanja: HTMLInputElement): boolean {
    console.log(`Adding article title: ${polazak.value} and link: ${dolazak.value}`);
    this.flights.push(new Flight(polazak.value, dolazak.value, vremePoletanja.value));
    polazak.value = '';
    dolazak.value = '';
    vremePoletanja.value = '';
    return false;
  }
}
