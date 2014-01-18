define('IssueDetailView', [
    'backbone',
    'underscore',
    'jquery'
], function (
    Backbone,
    _,
    $
) {
    "use strict";

    var IssueDetailView = Backbone.View.extend({
        initialize: function(){
            _.bindAll(this, 'render');

            this.template = this.options.template;
        },

        render: function(){
            this.$el.appendTo($(this.options.selector));
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    return IssueDetailView;
});
