import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FlightModel } from './flight/flight.model';
import { Flight } from './interfaces/flight';
import { Flight2 } from './models/flight';
import { GetFlights } from './store/actions/flight.actions';
import { selectedFlights } from './store/selector/flight.selector';
import { FlightState } from './store/state/flight.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public _flights$: Observable<Flight[]>;

  values?: string;

  angForm = new FormGroup({
    polazak: new FormControl("", [Validators.required, Validators.minLength(2)]),
    dolazak: new FormControl("", [Validators.required, Validators.minLength(2)]),
    vremePoletanja: new FormControl("", [Validators.required, Validators.minLength(4)]),
  });


  validacija() {
    console.log(this.angForm.value)
  }

  getControl(name: any): AbstractControl | null {
    return this.angForm.get(name);
  }

  flight1 = new Flight2(2, 'Beograd', 'Pariz', '10:30AM');
  
  flights = [
    new FlightModel('Beograd', 'Pariz', '10AM'),
    new FlightModel('Budimpešta', 'Porto', '6PM'),
    new FlightModel('Beograd', 'Madrid', '4PM'),
  ];

  constructor(private _store: Store<FlightState>, private _router: Router) {
    this._flights$ = this._store.pipe(select(selectedFlights));
  }

  addFlight(polazak: HTMLInputElement, dolazak: HTMLInputElement, vremePoletanja: HTMLInputElement): boolean {
    console.log(`Adding article title: ${polazak.value} and link: ${dolazak.value}`);
    this.flights.push(new FlightModel(polazak.value, dolazak.value, vremePoletanja.value));
    polazak.value = '';
    dolazak.value = '';
    vremePoletanja.value = '';
    return false;
  }

  ngOnInit() {
    this._store.dispatch(new GetFlights);
    }

}
