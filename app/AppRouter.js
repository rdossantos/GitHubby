define('AppRouter', [
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
    'CommentCollection'
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
    CommentCollection
) {
    "use strict";

    var layoutManager = new LayoutManager();

    var AppView = Backbone.View.extend({
        initialize: function(){
            _.bindAll(this, 'render');
            this.render();
        },

        render: function(){
            this.$el.html(this.options.template());
            return this;
        }
    });

    var appView = new AppView({template: template.something, el: 'body'});

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'redirectToIssues',
            'issues' : 'defaultRoute',
            'issues/:id': 'issuesDetail'
        },

        redirectToIssues: function(){
            this.navigate('issues', true);
        },

        defaultRoute: function() {
            var aCollectionView = new IssueSummaryCollectionView({
                collection: new IssueCollection(),
                template: template.issueCollectionView,
                container: '.issue-collection-container',
                selector: '.app-container',
                ItemView: IssueSummaryItemView
            });

            layoutManager.showView(aCollectionView);
        },

        issuesDetail: function(issueNumber){
            //i could try to reuse the model from the collection but it might not always be there
            //and the data might be old

            var issueModel = new IssueModel({number:issueNumber});
            issueModel.fetch().done(function(){
                var issueDetailView = new IssueDetailView({
                    template: template.issueDetailView,
                    selector: '.app-container',
                    model: issueModel
                });

                layoutManager.showView(issueDetailView);


                var commentCollection = new CommentCollection(null, {
                        issueNumber: issueNumber
                });

                var CommentItemView = ItemView.extend({
                    template:template.commentItemView
                });

                var commentCollectionView = new CollectionView({
                    collection: commentCollection,
                    template: template.commentCollectionView,
                    container: '.comments',
                    selector: '.app-container',
                    ItemView: CommentItemView
                });

                layoutManager.append(commentCollectionView);
                commentCollection.fetch();
            });
        }
    });

    return AppRouter;
});