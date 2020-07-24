#! /usr/bin/env node

const package = require('../package.json');
const lib = require('../lib');
const program = require('commander');
const c = require('ansi-colors');

program.version(package.version);

program
	.command('serve')
	.action(lib.serve);

program.parse(process.argv);

process.on('SIGINT', function() {
	console.log(c.gray('\rBye, come back soon!'))
	process.exit();
});

