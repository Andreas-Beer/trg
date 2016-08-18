/*global module*/

module.exports = function (grunt) {
  
  'use strict';
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-notify');
  
  grunt.initConfig({
    
    path: {
      gruntfile: 'Gruntfile.js',
      src: [
        '_playground/mocha/**/*.js'
      ],
      js_test: [
        'test/js/**/*.js'
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
      ],
      hbs: {
        temp: [
          'app/template/**/*.hbs',
          'app/template/**/*.handlebars'
        ],
        target: 'app/js/view/hbs.js'
      }
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
        mangle: true,
        beautify: false
      },
      my_target: {
        files: {
          '<%= path.hbs.target %>': '<%= path.hbs.target %>'
        }
      }
    },
    
    handlebars: {
      compile: {
        options: {
          separator: '',
          namespace: "JST",
          processName: function(filePath) {
            var pieces = filePath.split('/');
            pieces = pieces[pieces.length - 1].split(".")[0];
            return pieces;
          },
          processPartialName: function(filePath) {
            var pieces = filePath.split('/');
            pieces = filePath.split('/')[pieces.length - 1].replace(/^_/, '').replace(/.hbs/i, '');
            return pieces;
          }
        },
        files: {
          '<%= path.hbs.target %>': ['<%= path.hbs.temp %>']
        }
      }
    },

    watch: {
      js: {
        files: '<%= path.hint %>',
        tasks: [
          'jshint',
          'mochaTest',
          'uglify'
        ]
      },
      hbs: {
        files: [
          '<%= path.hbs.temp %>',
          '<%= path.gruntfile %>'
        ],
        tasks: [
          'handlebars'
        ]
      }
    }  
  });

  grunt.registerTask('default', [
    'jshint',
    'mochaTest:test'
  ]);
  
  grunt.registerTask('watch_hbs', 'watch:hbs');

};