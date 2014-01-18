module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    //grunt.loadNpmTasks('grunt-connect-proxy');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-cat');
    grunt.loadNpmTasks('grunt-contrib-concat');

    var jsSourceFiles = [
        'asset/A/*.js',
        'app/model/*.js',
        'app/forms/*.js',
        'app/view/**/*.js',
        'app/**/*.js',
        'test/**/*.js',
        '!test/backbone/**/*.js',
        '!*/template.js',
        '!test/js/*.js',
        '!**/**/template.js',
        'Gruntfile.js'
    ];

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            dev: {
                options:{
                    jshintrc: ".jshintrc"
                },
                src: jsSourceFiles  // defined at top
            },
            build: {
                options: {
                    camelcase: true,
                    curly: true,
                    eqeqeq: true,
                    eqnull: true,
                    browser: true,
                    white: false,
                    globals: {
                        define: true,
                        module: true,
                        jQuery: true,
                        $: true,
                        console: true,
                        require: true,
                        describe: true,
                        it: true,
                        expect: true,
                        beforeEach: true,
                        afterEach: true,
                        runs: true,
                        waits: true,
                        waitsFor: true,
                        spyOn: true
                    }
                },
                src: jsSourceFiles // defined at top
            }
        },

        handlebars: {
            compile: {
                options: {
                    amd: true,
                    processName: function (filename) {
                        var pieces = filename.split("/");
                        return pieces[pieces.length - 1].replace(".html", ""); // output: header
                    }
                },
                files: {
                    "asset/template/template.js": [
                        "asset/template/*/*/*.html",
                        "asset/template/**/*.html",
                        "asset/template/*.html"
                    ]
                }
            }
        },

        connect: {
            server: {
                options: {
                    port: 19476,
                    protocol: 'http',
                    base: './',
                    hostname: 'localhost',
                    keepAlive: true,
                    middleware: function (connect, options) {
                        var config = [
                            connect['static'](options.base),
                            connect.directory(options.base)
                        ];
                        var proxy = require('grunt-connect-proxy/lib/utils').proxyRequest;
                        config.unshift(proxy);
                        return config;
                    }
                }
            }
        },

        jasmine: {
            tests: {
                vendor: 'asset/libs/jquery.js',
                options: {
                    specs: 'test/**/*Spec.js',
                    outfile: './SpecRunner.html',
                    keepRunner: true,
                    host: 'http://localhost:19476',
                    template: require('grunt-template-jasmine-requirejs'),

                    templateOptions: {
                        requireConfig: {
                            baseUrl: 'app',
                            shim: {
                                'bootstrap': {
                                    deps: ['jquery'],
                                    exports: 'bootstrap'
                                },
                                'underscore':{
                                    exports: '_'
                                },
                                'underscoreBase': {
                                    exports: '_'
                                },
                                'backbone': {
                                    deps: ['jquery', 'underscore'],
                                    exports: 'Backbone'
                                },
                                'backbone-paginator': {
                                        deps: ['backbone']
                                },
                                'handlebars': {
                                    exports: 'Handlebars'
                                },
                                'template': {
                                    exports: 'template'
                                },
                                'marked': {
                                    exports: 'marked'
                                },
                                'highlightjs': {
                                    exports: 'highlightjs'
                                }
                            },

                            paths: {
                                bootstrap: '../asset/libs/bootstrap',
                                backbone: '../asset/libs/backbone',
                                'backbone-paginator': '../asset/libs/backbone.paginator',
                                underscore: '../asset/libs/underscore.custom',
                                underscoreBase: '../asset/libs/underscore',
                                'underscore.string': '../asset/libs/underscore.string.min',
                                jquery: '../asset/libs/jquery.min',
                                handlebars: '../asset/libs/handlebarsWithHelpers',
                                'template': '../asset/template/template',
                                marked:'../asset/libs/marked',
                                highlightjs: '../asset/libs/highlight.min'
                            }
                        }
                    },
                    '--local-to-remote-url-access' : true,
                    '--web-security': false,
                    '--ignore-ssl-errors': true
                }
            }
        },

        clean: {
            build: [
                'build'
            ]
        },

        requirejs: {
            compile: {
                options: {
                    appDir: './app',
                    baseUrl: '.',
                    dir: 'build/app',
                    optimize: 'uglify',
                    mainConfigFile: './asset/require.conf.js',
                    modules: [
                        {
                            name: 'App'
                        }
                    ],
                    logLevel: 0,
                    findNestedDependencies: true,
                    fileExclusionRegExp: /^\./,
                    inlineText: true
                }
            }
        },

        copy: {
            build: {
                files: [
                    {
                        expand: true,
                        src: [
                            'asset/libs/require.js',
                            'asset/require.conf.js',
                            'asset/img/**/*',
                            'asset/webfonts/**/*',
                            'asset/fonts/**/*',
                            'asset/handlebars/**/*',
                            'asset/css/**/*',
                            'index.html'
                        ],
                        dest: 'build'
                    }
                ]
            }
        },

        concat: {
            options: {
                separator: ';'
            },
            handlebarsHelpers:{
                src: ['asset/libs/handlebars.runtime.js', 'asset/handlebars/*.js'],
                dest: 'asset/libs/handlebarsWithHelpers.js'
            },
            dist:{
                src: [
                    'build/asset/libs/require.js',
                    'build/asset/require.conf.js',
                    'build/app/App.js'],
                dest: 'build/app/App.js'
            }
        },

        cat: {
            build: {
                file: 'asset/banner.txt'
            }
        },

        watch: {
            templates: {
                files: [
                    'asset/template/*.html',
                    'asset/template/**/*.html'
                ],
                tasks: ['handlebars']
            },
            tests: {
                files: jsSourceFiles, // defined at top
                tasks: [ 'jshint:dev','jasmine:tests']
            },
            handlebarsHelpers: {
                files: ['asset/handlebars/*.js','asset/handlebars/**/*.js'],
                tasks: ['concat:handlebarsHelpers']
            }
        }
    });

    grunt.registerTask('default', ['handlebars', 'jshint:dev', 'connect:server', 'watch']);
    grunt.registerTask('build', ['clean:build', 'jshint:build', 'handlebars', 'copy:build', 'requirejs', 'concat']);
};
