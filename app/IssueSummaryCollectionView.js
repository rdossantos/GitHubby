define('IssueSummaryCollectionView', [
    'backbone',
    'underscore',
    'template',
    'CollectionView',
    'IssueCollection',
    'IssueSummaryItemView'
], function (
    Backbone,
    _,
    template,
    CollectionView,
    IssueCollection,
    IssueSummaryItemView
) {
    "use strict";

    var IssueSummaryCollectionView = CollectionView.extend({
        events: {
            "click .issues-next": "nextIssues",
            "click .issues-previous": "previousIssues"
        },

        nextIssues: function(){
            this.collection.nextPage();
            /*jshint camelcase:false */
            this.collection.paginator_ui.currentPage++;
        },

        previousIssues: function(){
            /*jshint camelcase:false */
            if(this.collection.paginator_ui.currentPage > 1){
                this.collection.prevPage();
                /*jshint camelcase:false */
                this.collection.paginator_ui.currentPage--;
            }else{
                window.alert('You are on the first page!');
            }
        }
    });

    return IssueSummaryCollectionView;
});