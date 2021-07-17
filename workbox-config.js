module.exports = {
	globDirectory: 'wwwroot/',
	globPatterns: [
		'**/*.{css,ico,png,js,txt,md,json}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'wwwroot/sw.js'
};