import { Injectable } from '@angular/core';
import { tick } from '@angular/core/testing';

@Injectable()
export class FlightServiceService {
  
  getPrice(numberOfFlights:number): number{
  
    let cenaPoLetu = 8000;
    return cenaPoLetu*numberOfFlights;

  }
}
