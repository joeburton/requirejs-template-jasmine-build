'use strict';

define(function(require) {

    var DetailsView = require('app/DetailsView');

    describe('DetailsView', function() {
        
        var detailsView;
        
        beforeEach(function() {
            detailsView = new DetailsView();
        });

        it('should be an insatce of the Details View', function() {
            expect(detailsView instanceof DetailsView).toBeTruthy();
        });

    });

});
