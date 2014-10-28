require.config({
    paths: {
        jquery: 'libs/jquery-min',
        underscore: 'libs/underscore-min',
        backbone: 'libs/backbone-min',
        templates: '../templates',
        text: 'libs/text'
    }
});

require([
    // Load our app module and pass it to our definition function
    'app',
], function(App) {
    // The "app" dependency is passed in as "App"
    App.initialize();
});
