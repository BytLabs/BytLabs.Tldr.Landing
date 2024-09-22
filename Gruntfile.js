module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
  
      uglify: {
        build: {
          src: 'src/js/app.js',   
          dest: 'dist/js/app.min.js'
        }
      },
  
      copy: {
        main: {
          expand: true,
          cwd: 'src/',
          src: '**',
          dest: 'dist/',
        },
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
  
    grunt.registerTask('default', ['uglify', 'copy']);
  };