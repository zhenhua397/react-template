const {
	override,
	fixBabelImports,
	addLessLoader,
	addWebpackPlugin,
	addWebpackAlias
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

	addWebpackPlugin(new CssUrlRelativePlugin(/* options */))
);
