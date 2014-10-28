define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/personalDetails.html'
], function ($, _, Backbone, personalDetails) {

    var DetailsView = Backbone.View.extend({

        el: "#page",

        render: function() {

            var data = {
                name: 'name goes here'
            };

            var compiledTemplate = _.template(personalDetails, data);
            this.$el.html(compiledTemplate);
        }

    });

    return DetailsView;
  
});
