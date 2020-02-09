import { INIT_USER } from './action-type';
import { IUserState } from './reducer';
import { IAction } from '..';

export const initUserData = (user: IUserState): IAction => {
	return {
		type: INIT_USER,
		payload: {
			data: user
		}
	};
};
