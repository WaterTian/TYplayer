module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			dist: {
				files: {
					'build/<%= pkg.name %>.js': '<%= pkg.main %>',
					'build/<%= pkg.name %>libs.js': '<%= pkg.libs %>',
				}
			}
		},
		uglify: {
			dist: {
				files: {
					'build/<%= pkg.name %>.min.js':['build/<%= pkg.name %>.js'],
					'build/<%= pkg.name %>libs.min.js':['build/<%= pkg.name %>libs.js'],
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['concat', 'uglify']);

};