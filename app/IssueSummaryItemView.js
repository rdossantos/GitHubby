define('IssueSummaryItemView', [
    'backbone',
    'underscore',
    'template',
    'ItemView',
    'App'
], function (
    Backbone,
    _,
    template,
    ItemView,
    App
) {
    "use strict";

    var IssueSummaryItemView = ItemView.extend({
        App: App,
        tagName: 'a',
        className: 'list-group-item',
        template: template.issueItemView,
        attributes: function(){
            return {
                href: '#issues/' + this.model.get('number')
            };
        }
    });

    return IssueSummaryItemView;
});
