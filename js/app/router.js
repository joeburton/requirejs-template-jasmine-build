define([
    'jquery',
    'underscore',
    'backbone',
    'app/DetailsView'
], function($, _, Backbone, DetailsView) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            'details': 'showDetailsView',
            '*path': 'showDetailsView'
        }
    });

    var initialize = function() {

        var app_router = new AppRouter;

        app_router.on('route:showDetailsView', function(){

            var detailsView = new DetailsView();
            detailsView.render();

        });

        Backbone.history.start();

    };

    return { 
        initialize: initialize
    };

});
