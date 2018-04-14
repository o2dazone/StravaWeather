var webpack = require('webpack');
var path = require('path');
module.exports = {
	build: Date.now(),
	scripts: {
		paths: {
			all: './js/*.js',
			entry: './index.js',
			output: {
				dev: './chrome-extension',
				prod: './chrome-extension'
			}
		}
	},
	ports: {
		express: 8080,
		livereload: 35729,
		expressRoot: './chrome-extension'
	},
	webpack: {
		cache: true,
		output: {
			filename: './bundle.js'
		}
	},
	connect: {
		port: 8080,
		root: './'
	},
	liveReload: {
		port: 35729
	}
};