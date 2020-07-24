module.exports = {
	resolveMimeType(context) {
		// change all MD files to HTML
		if (context.response.is('md')) {
			return 'html';
		}
	}
}