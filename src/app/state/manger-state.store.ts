import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Car } from '../models';

export interface StateManagerComponentState {
  agGridDataSelection: Car[];
}

@Injectable()
export class ExtrasManagerStore extends ComponentStore<StateManagerComponentState> {

}
