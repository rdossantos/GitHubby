require.config({
    baseUrl: '../app',

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
});
