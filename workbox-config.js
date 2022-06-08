module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{html,ts,css,ico}'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};