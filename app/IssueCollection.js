define('IssueCollection', [
    'backbone',
    'underscore',
    'jquery',
    'backbone-paginator',
    'IssueModel'
], function (
    Backbone,
    _,
    $,
    paginator,
    IssueModel
) {
    "use strict";

    var IssueCollection = Backbone.Paginator.requestPager.extend({
        model: IssueModel,
        /*jshint camelcase:false */
        paginator_core: {
            type: 'GET',
            dataType: 'jsonp',
            url:'https://api.github.com/repos/rails/rails/issues'
        },
        /*jshint camelcase:false */
        paginator_ui: {
          firstPage: 1,
          currentPage: 1,
          perPage: 25
        },

        server_api: {
            'per_page': function() { return this.perPage; },
            'page': function() { return this.currentPage; }
        },

        initialize: function(){
            this.goTo(1);
        },

        parse: function(res){
            return res.data;
        }
    });

    return IssueCollection;
});
