({
    deps: ['jquery', 'underscore', 'backbone'
    ],
    callback: function ($, _, Backbone) {
        Backbone.history = new Backbone.History();

        afterEach(function(){
            Backbone.history.stop();
        });
    }
})