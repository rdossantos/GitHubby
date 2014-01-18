define('CollectionView', [
    'backbone',
    'underscore',
    'jquery'
], function (
    Backbone,
    _,
    $
) {
    "use strict";

    var CollectionView = Backbone.View.extend({
        initialize: function(){
            _.bindAll(this, 'render', 'add');

            this.template = this.options.template;
            this.container = this.options.container;
            this.ItemView = this.options.ItemView;
            this.collection = this.options.collection;
            this.listenTo(this.collection, 'add', this.add);
        },

        render: function(){
            this.$el.appendTo($(this.options.selector));
            this.$el.html(this.template());
            this.$container = this.options.container ? $(this.options.container) : this.$el;
            return this;
        },

        add: function(model){
            var itemView = new this.ItemView({model:model});
            this.$container.append(itemView.render().$el);
        }
    });

    return CollectionView;
});
