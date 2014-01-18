define('ItemView', [
    'backbone',
    'underscore'
], function (
    Backbone,
    _
) {
    "use strict";

    var ItemView = Backbone.View.extend({
        initialize: function(){
            _.bindAll(this, 'render');
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'remove', this.remove);
            this.template = this.template || this.options.template;
            this.render();
        },

        render: function(){
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        }
    });

    return ItemView;
});
