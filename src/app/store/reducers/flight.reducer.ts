import { combineReducers, compose, Store, Action, ActionReducer } from '@ngrx/store';
import { FlightActions, EnumFlightAction } from '../actions/flight.actions';
import { initialFlightsState } from '../state/flight.state';

export function flightReducer(state = initialFlightsState,action: FlightActions) {
    switch (action.type) {
        case EnumFlightAction.GetFlightsSuccess: {
            return {
                ...state,
                flights: action.payload
            };
        }
        default:
            return state;
    }
};

export const reducers = {
    flightReducer
  };


