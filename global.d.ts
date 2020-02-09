declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.styl';

// @ts-ignore
declare const process: {
	env: {
		TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq';
		[key: string]: any;
	};
};

// 将axios的返回值定义到全局ajax下
declare namespace Ajax {
	// axios 返回数据
	export interface AxiosResponse {
		data: AjaxResponse;
	}

	// 请求接口数据
	export interface AjaxResponse<T = any> {
		code?: number;
		data: T;
		msg: string;
		statusCode?: number;
	}
}
