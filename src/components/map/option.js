function mapoption() {
	var geoCoordMap = [
		{ name: '芬兰', value: [24.909912, 60.169095] },
		{ name: '德国', value: [13.402393, 52.518569] },
		{ name: '英国', value: [-0.126608, 51.208425] },
		{ name: '韩国', value: [126.979208, 37.53875] },
		{ name: '日本', value: [139.710164, 35.706962] },
		{ name: '澳大利亚', value: [135.193845, -25.304039] }
	];
	const hlGeoMap = [{ name: '美国', value: [-100.696295, 33.679979] }];

	let option = {
		legend: {},
		geo: {
			map: 'world', // 与引用进来的地图js名字一致
			roam: false, // 禁止缩放平移
			label: {
				normal: {
					// 默认的文本标签显示样式
					show: false
				},
				emphasis: {
					show: false
				}
			},
			itemStyle: {
				// 每个区域的样式
				opacity: 0.6,
				normal: {
					borderColor: '#334252', //区域边框颜色
					areaColor: '#334252'
				},
				emphasis: {
					show: false,
					areaColor: '#334252'
				}
			}
		},
		series: [
			{
				name: '', // 普通组
				type: 'scatter', // 散点
				coordinateSystem: 'geo', // 表示使用的坐标系为地理坐标系
				zlevel: 3,
				hoverAnimation: false, // 鼠标悬停是否放大
				label: {
					normal: {
						// 默认的文本标签显示样式
						color: '#000',
						show: false, // 标签隐藏
						position: 'top', // 标签显示的位置
						formatter: '{b}' // 标签内容格式器
					}
				},
				symbolSize: 8,
				itemStyle: {
					normal: {
						color: '#aaa'
					},
					emphasis: {
						show: false,
						color: '#52b266'
					}
				},
				data: geoCoordMap
			},
			{
				name: '', // 高亮组
				type: 'effectScatter', // 光晕散点
				coordinateSystem: 'geo', // 表示使用的坐标系为地理坐标系
				zlevel: 3,
				showEffectOn: 'render',
				rippleEffect: {
					brushType: 'fill' // 波纹绘制效果
				},
				hoverAnimation: true, // 鼠标悬停是否放大
				label: {
					normal: {
						// 默认的文本标签显示样式
						color: '#000',
						show: false, // 标签隐藏
						position: 'top', // 标签显示的位置
						formatter: '{b}' // 标签内容格式器
					}
				},
				symbolSize: 6,
				itemStyle: {
					normal: {
						color: '#52b266'
					},
					emphasis: {
						show: true,
						color: '#52b266'
					}
				},
				data: hlGeoMap
			}
		],
		textStyle: {
			fontSize: 12
		}
	};
	return option;
}
export { mapoption };
