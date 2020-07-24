tomd = require('../plugins/toMd')

module.exports = settings => {
	const configServer = {
		open: true,
		port: undefined,
		appIndex: undefined,
		watch: true,
		nodeResolve: true,
		plugins: [tomd],
		moduleDirs: ['node_modules', 'vendor'],
	}
	switch (settings.type) {
		case 'ui':
		case 'provider':
			configServer.appIndex = 'demo/index.html'
			break;
		case 'app':
			configServer.appIndex = 'index.html'
			break;
		default:
			console.error(c.red(`Invalid 'type' parameter on beautlitfy config file`))
			process.exit(-1)
	}
	return configServer
}