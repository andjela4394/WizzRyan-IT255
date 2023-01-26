import { Inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from "rxjs";
import { GetFlights, EnumFlightAction, GetFlightsSuccess } from '../actions/flight.actions';
import { switchMap } from 'rxjs/operators';
import { Flight } from '../../interfaces/flight';
import { FlightService } from "../services/flight.service";



@Injectable({
    providedIn: 'root'
  })
export class FlightEffect {
    constructor(private _actions$: Actions, private _flightService: FlightService) {
    }

    getFlights$ = createEffect(() =>
    this._actions$.pipe(
        ofType<GetFlights>(EnumFlightAction.GetFlights),
        switchMap(() => this._flightService.fetchFlights()),
        switchMap((flightHttp: Flight[]) => {
            return of(new GetFlightsSuccess(flightHttp))
        })
    )
    );
}