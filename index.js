requirejs.config({
    "baseUrl": "./s",
    "paths": {
        "underscore": "../vendor/underscore",
        "zepto": "../vendor/zepto",
        "backbone": "../vendor/backbone"
    },
    "shim": {
        "backbone": {
            "deps": [
                "underscore",
                "zepto"
            ],
            "exports": "Backbone"
        },
        "zepto": {
            "exports": "$"
        },
        "underscore": {
            "exports": "_"
        }
    }
});

/**
 * Entry-point the process
 */
require(['index/index'], function (index) {

    index.init();
});

