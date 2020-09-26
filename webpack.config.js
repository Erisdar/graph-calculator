const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: path.join(__dirname, 'src'),
	entry: './index.jsx',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		alias: {
			reducers: path.join(__dirname, 'src', 'reducers')
		},
		extensions: ['.js', '.jsx']
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: "index.html"
		})
	],
	module: {
		rules: [
			{
				test: /\.m?(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader?cacheDirectory=true'
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 8080,
		open: true,
		hot: true
	}
};