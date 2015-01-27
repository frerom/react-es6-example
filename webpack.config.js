module.exports = {
	entry: './entry',
	output: {
		path: __dirname + '/dist',
		filename: 'app.js'
	},
	module: {
		
		loaders: [
			{ test: /\.js$/, loaders: ['6to5'] },
			{ test: /\.css$/, loaders: ['style', 'css'] }
		]
	}
}
