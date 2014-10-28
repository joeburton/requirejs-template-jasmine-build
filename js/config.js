({
    'baseUrl': './js/',
    'paths': {
        'jquery': 'libs/jquery-min',
        'underscore': 'lib/underscore-min',
        'backbone': 'lib/backbone-min',
        'templates': '../templates',
        'text': 'libs/text'
    },

    'shim': {
        'underscore': {
            'exports': '_'
        },
        'backbone': {
            'deps': ['jquery', 'underscore'],
            'exports': 'Backbone'
        }
    }
})