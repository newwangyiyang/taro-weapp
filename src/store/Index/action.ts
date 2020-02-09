import { IAction } from '..';
import { ADD_NUM, INIT_PRODUCTOR } from './action-type';
import { Dispatch } from '@tarojs/taro';
import { getProductor } from '@/api/index';

export const addNum = (): IAction => {
	return {
		type: ADD_NUM
	};
};

export const initProductor = () => async (dispatch: Dispatch<IAction>) => {
	const { data }: { data: Ajax.AjaxResponse } = await getProductor();
	return dispatch({
		type: INIT_PRODUCTOR,
		payload: data.data
	});
};
