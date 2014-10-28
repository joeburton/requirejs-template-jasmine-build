'use strict';

define(function(require) {

    var DetailsView = require('app/DetailsView');

    describe('DetailsView', function() {
        
        var detailsView;
        
        beforeEach(function() {
            setFixtures(sandbox());
            $('#sandbox').append('<div id="page"> </div>');
        });

        it('should be an insatce of the Details View', function() {
            detailsView = new DetailsView();
            detailsView.render();
            expect(detailsView instanceof DetailsView).toBeTruthy();
        });

    });

});
