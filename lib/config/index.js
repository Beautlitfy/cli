const fs = require('fs'),
			toml = require('toml'),
			configServer = require('./configServer');

const settingsFile = fs.readFileSync(`${process.cwd()}/beautlitfy.toml`, 'utf-8');
const settings = toml.parse(settingsFile)

module.exports = {
	configServer: configServer(settings)
};