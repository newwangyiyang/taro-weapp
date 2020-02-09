import { INIT_USER } from './action-type';
import { IAction } from '..';

export interface IUserState {
	userId: number;
	username: string;
	password: string;
	age: number;
	sex: number;
	token: string;
	auth: string;
}

const user: IUserState = {
	userId: -1,
	username: '',
	password: '',
	age: 0,
	sex: 1,
	token: '',
	auth: ''
};

export const homeReducer = (state = user, action: IAction) => {
	switch (action.type) {
		case INIT_USER:
			return { ...(action.payload && action.payload.data) };
		default:
			return { ...state };
	}
};
