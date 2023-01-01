// eslint-disable-next-line no-undef
require('isomorphic-fetch');
import { stringify } from 'qs';

let _apiHost = '';
let _apiOptions = {};

export function setConfig({ host, options }) {
	if (host) {
		_apiHost = host;
	}

	if (options) {
		_apiOptions = options;
	}
}

function checkStatus(response) {
	if (response.status >= 200 && response.status < 300) {
		return response;
	}
	const error = new Error(response.statusText);
	error.response = response;
	throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export function request(urlString, options) {
	const url = `${_apiHost}${urlString}`;
	const newOptions = { ..._apiOptions, ...options };
	// const newOptions = options;
	if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
		newOptions.headers = {
			Accept: 'application/json',
			'Content-Type': 'application/json; charset=utf-8',
			...newOptions.headers
		};
		newOptions.body = JSON.stringify(newOptions.body);
	}
	// console.log(`发起请求 url=${url} 参数=${JSON.stringify(newOptions)}`);

	return fetch(url, newOptions)
		.then(checkStatus)
		.then(response => response.json())
		.then(data => {
			// console.log('返回数据', data);
			// if (data.status === 401) {
			// 	// TODO:统一引导登录
			// }
			// if (data.status === 302) {
			// 	// location.href = `#${data.url}`;
			// }
			// if (data.status !== 0) {
			// 	console.log('接口错误', url, result.error);
			// }
			return data;
		})
		.catch(error => {
			console.log(`请求失败 url=${url} error=${JSON.stringify(error)}`);
			return error;
		});
}

export function get(url, params) {
	let URL = url;
	if (params && `${params}` !== '{}') {
		URL = url + '?' + stringify(params);
	}
	return request(URL, {
		method: 'GET'
	});
}

export function post(url, params) {
	return request(url, {
		method: 'POST',
		body: JSON.stringify(params)
	});
}
