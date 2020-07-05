import { setConfig, get } from '../utils/request';

test('GET请求', () => {
	setConfig({
		host: 'http://www.hua397.com:3001'
	});
	return get('/api/article/today')
		.then(result => {
			expect(result.err_code).toBe(0);
		})
		.catch(err => {
			expect(err).toBe({});
		});
});

// test('POST请求', () => {
// 	const observer = {};
// 	NotifyCenter.addObserver(observer, 'AAA', result => {
// 		expect(result).toBe('hehe');
// 	});
// 	NotifyCenter.postNotification('AAA', 'hehe');
// });
