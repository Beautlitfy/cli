const autoprefixer = require('autoprefixer')
const postcss = require('postcss')

module.exports = (css, settings) => {
	return postcss([ autoprefixer({overrideBrowserslist: settings.browserslist}) ]).process(css,{from: 'undefined'}).then(result => {
		result.warnings().forEach(warn => {
			console.warn(warn.toString())
		})
		return result.css;
	})
}