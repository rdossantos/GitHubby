define('LayoutManager', [
    'backbone',
    'underscore',
    'jquery'
], function (
    Backbone,
    _,
    $
) {
    "use strict";

    //A simple object to clean up old views and put new ones on the screen
    //use showView first to remove anything old and show a different view
    //then you can append views after
    var LayoutManager = function(){
        this.showView = function(view){
            _.each(this.currentViews, function(currentView){
                currentView.remove();
            });

            this.currentViews = this.currentViews || [];
            this.currentViews.push(view);
            view.render();
        };

        this.append = function(view){
            this.currentViews.push(view);
            $('.app-container').append(view.render().el);
        };
    };

    return LayoutManager;
});