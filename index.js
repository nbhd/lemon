requirejs.config({
    "baseUrl": "./s",
    "paths": {
        "jquery": "../vendor/jquery-1.11.1.min",
        "qrcode": "../vendor/qrcode"
    },
    "shim": {
        "jquery": {
            "exports": "$"
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
require(['index/index', 'jquery', 'qrcode'], function (index) {

    lemon.core.QRCode   = QRCode;

    index.init();
});

