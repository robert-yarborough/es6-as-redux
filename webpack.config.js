const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: "/"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({template: './index.html', inject: 'body'})
	],
	devServer: {
		contentBase: './dist'
	}
};