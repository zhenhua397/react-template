import NotifyCenter from '../utils/notify-center';

test('增加通知，接收object数据', () => {
	const observer = {};
	NotifyCenter.addObserver(observer, 'NOTE', result => {
		expect(result.id).toBe(123);
	});
	NotifyCenter.postNotification('NOTE', { id: 123 });
});

test('增加通知，接收string数据', () => {
	const observer = {};
	NotifyCenter.addObserver(observer, 'AAA', result => {
		expect(result).toBe('hehe');
	});
	NotifyCenter.postNotification('AAA', 'hehe');
});
