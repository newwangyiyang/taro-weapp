import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { IUserState, homeReducer } from './home/reducer';
import { IIndexState, indexReducer } from './Index/reducer';

export interface IAction<T = any> {
	type: string;
	payload?: {
		data: T;
	};
}

export interface IRootState {
	home: IUserState;
	index: IIndexState;
}

const reducer = combineReducers({
	home: homeReducer,
	index: indexReducer
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, createLogger())));

export default store;
