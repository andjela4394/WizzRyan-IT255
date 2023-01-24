import { Component, OnInit } from '@angular/core';
import { Flight } from '../models/flight';

import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {
  flights!: Flight[];
  constructor(private flightService: FlightService) { }
  ngOnInit() {
    this.getFlights();
    }
    getFlights(): void {
    this.flightService.getFlights()
    .subscribe(flights => this.flights = flights);
    }
    }
    
