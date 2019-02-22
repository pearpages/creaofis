import { Action, ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

// TODO: create interfaces

const configReducers = (state = { data: 'to be filled in the future' }, action: Action): Object => {
  switch (action.type) {
    default:
      return state;
  }
};

export const appReducers: ActionReducerMap<any, any> = {
  config: configReducers,
  router: routerReducer
};
