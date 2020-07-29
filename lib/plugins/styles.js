const sass = settings => ({
	resolveMimeType(context) {
		if (context.path.endsWith('.scss')) {
			return 'js';
		}
	},
	async transform(context) {
		if (context.path.endsWith('.scss')) {
			const { sass2CSS } = require("../utils/sass-transform");
			const css = await sass2CSS(context.body, settings);
			return { body: css};
		}
	}
})

const less = settings => ({
	resolveMimeType(context) {
		if (context.path.endsWith('.less')) {
			return 'js';
		}
	},
	async transform(context) {
		if (context.path.endsWith('.less')) {
			const { less2CSS } = require("../utils/less-transform");
			const css = await less2CSS(context.body, settings);
			return { body: css};
		}
	}
})

const stylus = settings => ({
	resolveMimeType(context) {
		if (context.path.endsWith('.styl')) {
			return 'js';
		}
	},
	async transform(context) {
		if (context.path.endsWith('.styl')) {
			const { stylus2CSS } = require("../utils/stylus-transform");
			const css = await stylus2CSS(context.body, settings);
			return { body: css};
		}
	}
})

module.exports = {
	sass,
	less,
	stylus
}