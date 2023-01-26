import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import {Flight2} from '../models/flight'



@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private lambdaFlights = 'http://localhost:3000/posts';
  constructor(private _httpClient: HttpClient) { }

  getFlights(): Observable<Flight2[]> {
    return this._httpClient.get<Flight2[]>(this.lambdaFlights)
    }
    getFlight(id: number): Observable<Flight2> {
    const url = `${this.lambdaFlights}/${id}`
    return this._httpClient.get<Flight2>(url)
    }
    
}
