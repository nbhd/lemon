define(function (require, module, exports) {

    var View = function () {};
    var $ = require('jquery');

    View.prototype = {

        /**
         * initialize
         */
        init: function () {
            console.log('init view');

            this.qrcode = new lemon.core.QRCode($('#qrcode')[0], {
                width: 300,
                height: 300
            });

            this.input = $('#url');
        },

        /**
         * generate qr code
         */
        generate: function () {
            var url = this.input[0].value;

            this.qrcode.makeCode(url);
        },

        /**
         * save qr code
         */
        save: function (url, name){
            console.log('save: ', url, name);
            if (!url) {
                return;
            }

            var a = document.createElement('a');
            a.href = url;
            a.setAttribute('download', name || 'noname');
            a.dispatchEvent(new CustomEvent('click'));
        },

        /**
         * set events
         */
        _setEvents: function () {

            var self = this;
            this.input
                .on('blur', function () {

                    self.generate();
                })
                .on('keyup', function (e) {
                    if (e.keyCode !== 13) {
                        return;
                    }

                    self.generate();
                });

            $('.lemon-btn-save').eq(0).on('click', function () {
                self.save($('#qrcode img')[0].src, self.input[0].value);
            });
        }
    };

    return new View();
});
