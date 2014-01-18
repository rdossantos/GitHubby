define('App', [
    'backbone',
    'bootstrap',
    'underscore',
    'jquery',
    'template',
    'ItemView',
    'IssueCollection',
    'CollectionView',
    'IssueSummaryItemView',
    'IssueSummaryCollectionView',
    'LayoutManager',
    'IssueDetailView',
    'IssueModel',
    'CommentCollection',
    'AppRouter'
], function (
    Backbone,
    bootstrap,
    _,
    $,
    template,
    ItemView,
    IssueCollection,
    CollectionView,
    IssueSummaryItemView,
    IssueSummaryCollectionView,
    LayoutManager,
    IssueDetailView,
    IssueModel,
    CommentCollection,
    AppRouter
) {
    "use strict";

    if(!window.console){
        window.console = {
            log: function () { return false; },
            info: function () { return false; },
            warn: function () { return false; },
            trace: function () { return false; }
        };
    }

    var router = new AppRouter();
    Backbone.history.start();

    return router;
});
