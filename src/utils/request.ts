import Taro from '@tarojs/taro';

// 根据运行环境获取后台接口的baseURL
const getBaseUrl = () =>
	process.env.NODE_ENV === 'development'
		? 'https://api.myjson.com/bins'
		: 'https://www.baidu.com/api';

class HttpRequest {
	public baseOptions(params, method = 'GET') {
		let { url, data } = params;
		const BASE_URL = getBaseUrl();
		let contentType = 'application/json';
		contentType = params.contentType || contentType;
		interface IOptionType {
			url: string;
			data?: object | string;
			method?: any;
			header: object;
			// mode: string,
			success?: any;
			error?: any;
			xhrFields?: object;
		}
		const Token = Taro.getStorageSync('Token');

		// 校验缓存中是否存在Token
		const option: IOptionType = Token
			? {
					url: url.indexOf('http') !== -1 ? url : BASE_URL + url,
					data: data,
					method: method,
					header: {
						'content-type': contentType,
						Token
					}
			  }
			: {
					url: url.indexOf('http') !== -1 ? url : BASE_URL + url,
					data: data,
					method: method,
					header: {
						'content-type': contentType
					}
			  };

		return Taro.request(option);
	}

	public get(url: string, data: object | '' = '') {
		let option = { url, data };
		return this.baseOptions(option);
	}

	public post(url: string, data: object, contentType: string) {
		let params = { url, data, contentType };
		return this.baseOptions(params, 'POST');
	}

	public put(url: string, data = '') {
		let option = { url, data };
		return this.baseOptions(option, 'PUT');
	}

	public delete(url: string, data = '') {
		let option = { url, data };
		return this.baseOptions(option, 'DELETE');
	}
}

const IHttp = new HttpRequest();

export default IHttp;
