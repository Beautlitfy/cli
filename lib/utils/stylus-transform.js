const stylus = require('stylus');
const completeCSS = require('./autoprefixer')

const getCSS = (stylusString, settings) => {
	return new Promise((resolve, reject) => {
		stylus.render(stylusString, function(err, css){
			if (err) reject(err);
			else resolve(css)
		});
	})
}

const stylus2CSS = async (body, settings) => {
	const _css = await getCSS(body, settings)
	const css = await completeCSS(_css, settings)
	return `
		import { css } from 'lit-element';

		export const styles = css\`${css}\`;
	`;

}

module.exports = {
	stylus2CSS
}