import { Flight2 } from 'src/app/models/flight';

export interface FlightState {
    flights: Array<Flight2>;
}

export const initialFlightsState: FlightState = {
    flights: []
};