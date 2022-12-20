import { Component, OnInit } from '@angular/core';
import { FlightServiceService } from '../flight-service.service';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.scss'],
  providers: [FlightServiceService]
})
export class DiComponent implements OnInit {

  constructor(private FlightService : FlightServiceService) {
    this.FlightService = FlightService;
  }

  ukupnaCena = this.FlightService.getPrice(6);

  ngOnInit(): void {
  }

}


