import { createSelector } from '@ngrx/store';

const selectFlights = (state: any) => state.flight;
export const selectedFlights = createSelector(
    selectFlights,
    (state: any) => {
        return state?.flights?.flights;
    }
);