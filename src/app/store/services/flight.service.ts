import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { FlightState } from '../state/flight.state';
import { selectedFlights } from '../selector/flight.selector';
import { Flight2 } from 'src/app/models/flight';


@Injectable()
export class FlightService {
    public _flights$: Observable<Flight2[]>;
    public constructor(private _http: HttpClient, private _store: Store<FlightState>) {
        this._flights$ = this._store.pipe(select(selectedFlights));
    }
    public fetchFlights(): Observable<[Flight2]> {
        return this._http.get<[Flight2]>('http://localhost:3000');
    }
}
