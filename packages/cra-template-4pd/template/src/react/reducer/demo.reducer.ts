import produce from 'immer';
import { createReducer } from 'typesafe-actions';
import { SET_DEMO_DATA, DemoActions } from '../action/demo.action';
import { DemoSummaryDto } from 'shared/dto/demo';

export interface DemoState {
    demo: DemoSummaryDto[];
}

const defaultState: DemoState = {
    demo: [],
};

export const demoReducer = createReducer<DemoState, DemoActions>(defaultState, {
    [SET_DEMO_DATA]: (state, action) => {
        return produce(state, draftState => {
            draftState.demo = action.payload;
        });
    },
});
