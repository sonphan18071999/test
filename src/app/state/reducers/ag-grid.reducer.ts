import { createReducer, on } from '@ngrx/store';
import { Car } from 'src/app/models';
import { saveFetchingData } from '../actions/ag-grid.actions';

export const initialState: Car[] = [{ make: '', model: '', price: 0 }];

export const agGridReducer = createReducer(
  initialState,
  on(saveFetchingData, (state, { fetchingData }) => {
    return { ...state, fetchingData };
  })
);
