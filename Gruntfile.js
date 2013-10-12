module.exports = function(grunt) {
	grunt.initConfig({
		replace: {
			development: {
				options: {
					patterns: [{
						match: 'SITEURL',
						replacement: 'http://localhost:80'
					}]
				},
				files: [
					{src: ['src/chat.js'], dest: 'public/chat.js'}
				],
			},
			production: {
				options: {
					patterns: [{
						match: 'SITEURL',
						replacement: 'http://146.185.129.136:80'
					}]
				},
				files: [
					{src: ['src/chat.js'], dest: 'public/chat.js'}
				],
			}
		}
	});

	grunt.loadNpmTasks('grunt-replace');
};