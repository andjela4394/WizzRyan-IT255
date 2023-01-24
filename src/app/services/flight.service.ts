import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import {Flight} from '../models/flight'



@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private lambdaFlights = 'http://localhost:3000/posts';
  constructor(private _httpClient: HttpClient) { }

  getFlights(): Observable<Flight[]> {
    return this._httpClient.get<Flight[]>(this.lambdaFlights)
    }
    getFlight(id: number): Observable<Flight> {
    const url = `${this.lambdaFlights}/${id}`
    return this._httpClient.get<Flight>(url)
    }
    
}
