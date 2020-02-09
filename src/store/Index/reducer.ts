import { IAction } from '..';
import { ADD_NUM, INIT_PRODUCTOR } from './action-type';

export interface IIndexState {
	color: string;
	price: number;
	productor: string;
	type: string;
}

export interface IIndexState {
	num: number;
}

const index: IIndexState = {
	num: 0,
	color: '',
	price: 0,
	productor: '',
	type: ''
};

export const indexReducer = (state = index, action: IAction) => {
	switch (action.type) {
		case ADD_NUM:
			return { ...state, num: ++state.num };
		case INIT_PRODUCTOR:
			return { ...Object.assign(state, action.payload) };
		default:
			return { ...state };
	}
};
