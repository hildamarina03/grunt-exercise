module.exports = function (grunt) {
  ///////////////////////////
  // Project configuration.//
  ///////////////////////////
  // CSSMinify configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
    , cssmin: {
      target: {
        files: [{
          expand: true
          , cwd: 'src/css'
          , src: ['*.css', '!*.min.css']
          , dest: 'dist/css'
          , ext: '.min.css'
        }]
      }
    },

    concat: {
      options: {
        separator: ';',
      },
      
      dist: {
        src: ['src/css/mystyle.css', 'src/css/styles.css'],
        dest: 'dist/css/concat.css',
      },
    },
    
    csslint: {
      strict: {
      options: {
        import: 2
      },
      src: ['dist/css/concat.min.css']
      },
      lax: {
      options: {
        import: false
      },
      src: ['dist/css/concat.min.css']
      }
    }
  })
  // Load the plugins that provides task.
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-csslint');

  // Default task(s). Terminal grunt
  grunt.registerTask('default', ['cssmin','csslint','concat','log'])

  //Specific task. Terminal grunt log
  grunt.registerTask('log', function(){
    console.log("Hello");
  })

};