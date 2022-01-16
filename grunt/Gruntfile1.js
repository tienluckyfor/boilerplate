module.exports = function(grunt) {
	// grunt speak
	grunt.registerTask('speak', function() {
		console.log("I'm Speaking");
	});
	// grunt yell
	grunt.registerTask('yell', function() {
		console.log("I'm YELLING");
	});
	// grunt both
	grunt.registerTask('both', [ 'speak', 'yell' ]);
	// grunt
	grunt.registerTask('default', [ 'speak', 'yell' ]);
};
