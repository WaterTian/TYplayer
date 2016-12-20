module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			dist: {
				files: {
					'build/<%= pkg.name %>.js': '<%= pkg.main %>',
				}
			}
		},
		uglify: {
			dist: {
				files: {
					'build/<%= pkg.name %>.min.js':['build/<%= pkg.name %>.js'],
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['concat', 'uglify']);

};