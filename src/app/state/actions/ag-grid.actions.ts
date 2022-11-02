import { createAction, props } from '@ngrx/store';
import { Car } from 'src/app/models';

export const saveFetchingData = createAction(
  '[Ag-Grid Component] Load data',
  props<{ fetchingData: Car[] }>()
);
