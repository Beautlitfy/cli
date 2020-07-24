const detect = require('detect-port');
const port = process.env.BEAUTLITFY_PORT || 8080;
const getPort = () => detect(port)
	.then( _port => port == _port ? port : _port)
	.catch(err => { console.log(err); });
module.exports = getPort