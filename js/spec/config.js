({
    'baseUrl': './js',
    'paths': {
        'jquery': 'libs/jquery-min',
        'underscore': 'libs/underscore-min',
        'backbone': 'libs/backbone-min',
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