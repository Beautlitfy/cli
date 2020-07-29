const styles = require('../plugins/styles')

const getStyleFromSettings = settings => {
	switch (settings.styles) {
		case 'sass':
			return '.scss'
		case 'less':
			return '.less'
		case 'stylus':
			return '.styl'
		default:
			console.error(c.red(`Invalid 'styles' parameter on beautlitfy config file`))
			process.exit(-1)
	}
}

const configByType = (settings) => {
	let config = {};
	switch (settings.type) {
		case 'ui':
			config.plugins = [styles[settings.styles](settings)];
			config.appIndex = 'demo/index.html'
			break;
		case 'provider':
			config.appIndex = 'demo/index.html'
			break;
		case 'app':
			config.appIndex = 'index.html'
			break;
		default:
			console.error(c.red(`Invalid 'type' parameter on beautlitfy config file`))
			process.exit(-1)
	}
	return config
}

module.exports = settings => {
	const configServer = {
		open: true,
		appIndex: undefined,
		watch: true,
		nodeResolve: true,
		fileExtensions: [getStyleFromSettings(settings)],
		moduleDirs: ['node_modules', 'vendor'],
		...configByType(settings)
	}
	return configServer
}