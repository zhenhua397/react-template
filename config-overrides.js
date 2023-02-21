// 配置文档: https://github.com/arackaf/customize-cra/blob/master/api.md
const {
	override,
	fixBabelImports,
	addLessLoader,
	addWebpackPlugin,
	addWebpackAlias,
	addBundleVisualizer
} = require('customize-cra');

const CssUrlRelativePlugin = require('css-url-relative-plugin')

const path = require('path');

// 关闭sourceMap
process.env.GENERATE_SOURCEMAP = 'false';

module.exports = override(	
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: true
	}),

	// alias for "@" imports, @/components/xxx
	addWebpackAlias({
		['@']: path.resolve(__dirname, 'src')
	}),

	addLessLoader({
		javascriptEnabled: true,
		modifyVars: { '@primary-color': '#1DA57A' }
	}),

	// 可视化分析
	addBundleVisualizer({}, true),

	addWebpackPlugin(new CssUrlRelativePlugin(/* options */))
);
