module.exports = async () => {
	const c = require('ansi-colors'),
				chokidar = require('chokidar'),
				{ createConfig, startServer } = require('es-dev-server'),
				getPort  = require('../utils/getPort'),
				{ configServer } = require('../config');

	configServer.port = await getPort();
	const config = createConfig(configServer);
	const fw = chokidar.watch(['src', 'demo'])
	const { app, server } = await startServer(config, fw)
	console.info(`${c.yellow('Server running on: ')}${c.cyan(`http://localhost:${configServer.port}`)}`)
}