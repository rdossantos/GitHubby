require.config({
    baseUrl: '../../',
    urlArgs: "i=" + Math.random(), // TODO: remove this in production
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'bootstrap'
        },
        'underscore':{
            exports: '_'
        },
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        'handlebars': {
            exports: 'Handlebars'
        }
    },

    paths: {
        bootstrap: 'asset/libs/bootstrap',
        backbone: 'asset/libs/backbone',
        underscore: 'asset/libs/underscore',
        jquery: 'asset/libs/jquery.min',
        handlebars: 'asset/libs/handlebars.runtime',
        moment: 'asset/libs/moment',
        'template': 'asset/template/template',
        'A.Head': 'asset/A/A.Head',
        'A.App': 'asset/A/A.App',
        'A.Utils': 'asset/A/A.Utils',
        'A.Module': 'asset/A/A.Module',
        'A.Layout': 'asset/A/A.Layout',
        'A.View': 'asset/A/A.View',
        'A.Model': 'asset/A/A.Model',
        'A.Collection': 'asset/A/A.Collection',
        'A.CollectionView': 'asset/A/A.CollectionView',
        'A.ItemView': 'asset/A/A.ItemView',
        'A.EditableItemView': 'asset/A/A.EditableItemView',
        A: 'asset/A/A'
    }
});