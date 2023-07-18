module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('clivemurray.com/public');
	eleventyConfig.setUseGitIgnore(false);
	eleventyConfig.setServerOptions({
		liveReload: false,
		watch: [
			'clivemurray.com/public/**/*',
		],
		showVersion: true,
	});

	return {
		dir: {
			includes: "_includes",
			layouts: "_layouts",
		}
	}
};
