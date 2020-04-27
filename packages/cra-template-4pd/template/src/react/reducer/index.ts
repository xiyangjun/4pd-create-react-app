import { combineReducers } from 'redux';
import { demoReducer } from './demo.reducer';

export const AppReducer = combineReducers({
    demo: demoReducer,
});

export type AppState = ReturnType<typeof AppReducer>;