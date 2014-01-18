define('IssueModel', [
    'backbone',
    'underscore',
    'marked',
    'highlightjs'
], function (
    Backbone,
    _,
    marked,
    highlightjs
) {
    "use strict";

    var IssueModel = Backbone.Model.extend({
        url:function(){
            return 'https://api.github.com/repos/rails/rails/issues/' + this.get('number');
        },

        parse: function(issue){
            issue.bodySummary = _.prune(issue.body, 140);
            issue.bodyHighlighted = this.highlightSyntax(issue.body);

            /*jshint camelcase:false */
            issue.createdDate = new Date(issue.created_at);

            _.each(issue.labels, function(label){
                label.contrastColor = this.getContrastColor(label.color);
            }, this);
            return issue;
        },

        //these 2 functions should probably be in a utils class or handlebars helper or
        //undersconre.string mixin
        highlightSyntax: function(markdownString){
            var $bodyAsHtml = $('<div id="highlight-wrapper">' + marked(markdownString) + '</div>');
            var $snippets = $bodyAsHtml.find('pre > code');

            //have to syntax highlight each snippet seperately incase of different languages
            _.each($snippets, function(snippet){
                var highlightedSnippet = highlightjs.highlightAuto($(snippet).html()).value;
                $bodyAsHtml
                    .find('pre > code')
                    .first()
                    .replaceWith(highlightedSnippet);
            });


            return $bodyAsHtml.html();
        },

        //make sure there is always enough contrast so you can read the labels
        //thanks http://24ways.org/2010/calculating-color-contrast/
        getContrastColor: function(hexcolor){
            return (parseInt(hexcolor, 16) > 0xffffff/2) ? '000':'fff';
        }
    });

    return IssueModel;
});
