requirejs.config({
    "baseUrl": "./s",
    "paths": {
        "underscore": "../vendor/underscore",
        "jquery": "../vendor/jquery-1.11.1.min",
        "backbone": "../vendor/backbone",
        "qrcode": "../vendor/qrcode"
    },
    "shim": {
        "backbone": {
            "deps": [
                "underscore",
                "jquery"
            ],
            "exports": "Backbone"
        },
        "jquery": {
            "exports": "$"
        },
        "underscore": {
            "exports": "_"
        },
        "qrcode": {
            "deps": [
                "jquery"
            ],
            "exports": "Qrcode"
        }
    }
});

var lemon = {};
lemon.core = {};

/**
 * Entry-point the process
 */
require(['index/index', 'backbone', 'jquery', 'underscore', 'qrcode'], function (index) {

    lemon.core.QRCode   = QRCode;

    index.init();
});

