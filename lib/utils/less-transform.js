const less = require('less');
const completeCSS = require('./autoprefixer')

const getCSS = async (lessString, settings) => {
	const _css = (await less.render(lessString)).css
	const css = await completeCSS(_css, settings) 
	return css
}

const less2CSS = async (body, settings) => {
	return `
		import { css } from 'lit-element';

		export const styles = css\`${await getCSS(body, settings)}\`;
	`;

}

module.exports = {
	less2CSS
}