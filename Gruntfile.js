module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        requirejs: {
            options: {
                baseUrl: 'js',
                webroot: 'js',
                config: ['main.js'],
                name: 'main',
                require: 'libs/require',
                almond: 'libs/almond',
                includeAlmond: true,
                out: 'build/<%= pkg.name %>.min.js'
            },
            prod: {
                options: {
                    build: true
                }
            }
        },

        jasmine: {
            options: {
                keepRunner: true
            },
            all: {
                options: {
                    specs: 'js/spec/*.spec.js',
                    template: require('grunt-template-jasmine-requirejs'),
                    templateOptions: {
                        requireConfig: {
                            'baseUrl': './js',
                            'paths': {
                                'jquery': 'libs/jquery-min',
                                'underscore': 'libs/underscore-min',
                                'backbone': 'libs/backbone-min',
                                'templates': '../templates',
                                'text': 'libs/text'
                            },

                            'shim': {
                                'underscore': {
                                    'exports': '_'
                                },
                                'backbone': {
                                    'deps': ['jquery', 'underscore'],
                                    'exports': 'Backbone'
                                }
                            }
                        }
                    }
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-require');
    grunt.loadNpmTasks('grunt-contrib-uglify');

};