import { action } from 'typesafe-actions';
import { DemoSummaryDto } from 'shared/dto/demo';

export const GET_DEMO = 'GET_DEMO';
export const getDemo = () => action(GET_DEMO);
export type getDemoAction = ReturnType<typeof getDemo>;

export const SET_DEMO_DATA = 'SET_DEMO_DATA';
export const setDemoData = (data: DemoSummaryDto[]) => action(SET_DEMO_DATA, data);
export type setDemoDataction = ReturnType<typeof setDemoData>;

export type DemoActions = getDemoAction | setDemoDataction;
