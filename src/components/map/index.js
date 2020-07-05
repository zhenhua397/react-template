import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.less';
import '../../../node_modules/echarts/map/js/world.js';
import echarts from 'echarts';
import { mapoption } from './option.js';

// 参考
// https://blog.csdn.net/xkxnq/article/details/104576803
// https://echarts.apache.org/examples/zh/editor.html?c=effectScatter-bmap
// 对比：https://antv.antfin.com/zh-cn/g2/3.x/demo/map/bubble-map.html

// TODO:根据用户选择切换hlGeoMap数据，展示高亮
class Map extends Component {
	componentDidMount() {
		let chart = echarts.init(document.getElementById('chart'));
		let option = mapoption();
		chart.setOption(option);
	}
	render() {
		return <div class='chart' id='chart'></div>;
	}
}

Map.propTypes = {};

export default Map;
