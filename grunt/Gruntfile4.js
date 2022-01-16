module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		concat: {
			js: {
				src: [ 'js/1.js', 'js/2.js' ],
				dest: 'build/scripts.js'
			},
			css: {
				src: [ 'css/1.css', 'css/2.css' ],
				dest: 'build/styles.css'
			}
		},
		watch: {
			js: {
				files: [ 'js/**/*.js' ],
				tasks: [ 'concat:js' ]
			},
			css: {
				files: [ 'css/**/*.css' ],
				tasks: [ 'concat:css' ]
			}
		},
		uglify: {
			my_target: {
				options: {
					compress: {
						drop_console: true
					},
					mangle: {
						reserved: [ 'jQuery' ]
					}
				},
				files: {
					'build/scripts.min.js': [ 'js/**/*.js' ]
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', [ 'concat', 'watch' ]);
};
