define('CommentCollection', [
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

    var CommentCollection = Backbone.Collection.extend({
        initialize: function(models, options){
            _.bindAll(this, 'url');
            this.issueNumber = options.issueNumber;
        },

        url: function(){
                return 'https://api.github.com/repos/rails/rails/issues/' + this.issueNumber  + '/comments';
        },

        parse: function(res){
            _.each(res, function(modelAttributes){
                modelAttributes.highlightedBody = modelAttributes.body;
                modelAttributes.highlightedBody = this.replaceMentionWithLink(modelAttributes.highlightedBody);
                modelAttributes.highlightedBody = this.highlightSyntax(modelAttributes.highlightedBody);

                /*jshint camelcase:false */
                modelAttributes.createdDate = new Date(modelAttributes.created_at);
            }, this);

            return res;
        },

        //these mention and highlight functions belong in a handlebars helper or utils class
        //maybe a underscore.string mixin, cut and paste for time...
        mentionRegex: /\@[\w][^\s]*/,

        replaceMentionWithLink: function(str){
            while(str.match(this.mentionRegex)){
                str = str.replace(this.mentionRegex, this.getMentionLink);
            }

            return str;
        },

        getMentionLink: function($1){
            //add span inbetween name so we don't end up in an infinite loop
            return '<a href="https://github.com/' + $1.substring(1) + '" ><span>@</span>' + $1.substring(1) + '</a>';
        },


        highlightSyntax: function(markdownString){
            //get the body from github and make the markdown html friendly
            var $bodyAsHtml = $('<div id="highlight-wrapper">' + marked(markdownString) + '</div>');
            var $snippets = $bodyAsHtml.find('pre > code');


            //iterate over each code snippet in the body, highlight the syntax,
            //then find the snippet in the body again and replace it with the highlighted version
            //have to syntax highlight each snippet seperately incase of different languages
            _.each($snippets, function(snippet){
                var highlightedSnippet = highlightjs.highlightAuto($(snippet).html()).value;
                $bodyAsHtml
                    .find('pre > code')
                    .first()
                    .replaceWith(highlightedSnippet);
            });


            return $bodyAsHtml.html();
        }
    });

    return CommentCollection;
});
