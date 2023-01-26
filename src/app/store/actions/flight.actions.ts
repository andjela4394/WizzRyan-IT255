import { Action } from '@ngrx/store';
import { Flight } from '../../interfaces/flight';

export enum EnumFlightAction {
    GetFlights = '[Flight] Get Flights',
    GetFlightsSuccess = '[Flight] Get Flights Success'
}
export class GetFlights implements Action {
    public readonly type = EnumFlightAction.GetFlights;
}
export class GetFlightsSuccess implements Action {
    public readonly type = EnumFlightAction.GetFlightsSuccess;
    constructor(public payload: Flight[]) { }
}
export type FlightActions = GetFlights | GetFlightsSuccess;