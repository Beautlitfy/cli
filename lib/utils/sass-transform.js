const sass = require('node-sass');
const completeCSS = require('./autoprefixer')

const getCSS = (sassString, settings) => {
	const _css = sass.renderSync(
		{
			data: sassString, 
			outputStyle: 'compressed'
		}).css.toString()
	const css = await completeCSS(_css, settings) 
	return css
}

const sass2CSS = (body, settings) => {
	return `
		import { css } from 'lit-element';

		export const styles = css\`${getCSS(body, settings)}\`;
	`;

}

module.exports = {
	sass2CSS
}