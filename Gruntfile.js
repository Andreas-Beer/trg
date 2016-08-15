/*global module*/

module.exports = function (grunt) {
  
  'use strict';
  
  grunt.initConfig({
    
    path: {
      src: [
        '_playground/mocha/*'
      ],
      
      js_test: [
        'test/js/mocha_try.test.js'
      ],
      
      js_prod: [
        'app/js/model/**/*js',
        'app/js/service/**/*js',
        'app/js/app/**/*js'
      ],
      
      hint: [
        'Gruntfile.js',
        '<%= path.src %>',
        '<%= path.js_test %>',
        '<%= path.js_prod %>'
      ]
      
    },
    
    jshint: {
      files: '<%= path.hint %>',
      options: {
        jshintrc: true
      }
    },
    
    mochaTest: {
      test: {
        src: '<%= path.js_test %>'
      }
    },
    
    uglify: {
      options: {
        mangle: false,
        beautify: true
      },
      my_target: {
        files: {
          'app/js/main.js': '<%= path.js_prod %>'
        }
      }
    },
    
    watch: {
      files: '<%= path.hint %>',
      tasks: [
        'jshint',
        'mochaTest',
        'uglify'
      ]
    }
    
    
  });
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-notify');
  
  grunt.registerTask('default', [
    'jshint',
    'mochaTest:test'
  ]);
  
  grunt.registerTask('whatch_ugly', [
    'uglify'
  ]);
};