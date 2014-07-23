define(function (require, exports, module) {

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

            this._setEvents();
        },

        /**
         * generate qr code
         */
        generate: function () {
            var url = this.input[0].value;

            if (!url) {
                $('#qrcode').children()[1].src = '';
                $('#qrcode').children()[1].alt = '';
                return;
            }

            this.qrcode.makeCode(url);
        },

        /**
         * save qr code
         */
        save: function (url, name){
            console.log('save: ', url, name);

            var log = $('#log')[0].innerText || '';
            if (!url || !name) {
                $('#log')[0].innerText = 'failed\n' + log;
                return;
            }

            var a = document.createElement('a');
            a.href = url;
            a.setAttribute('download', name + '.png' || 'noname.png');
            a.dispatchEvent(new CustomEvent('click'));

            $('#log')[0].innerText = 'success\n' + log;
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

            // click
            $('.lemon-btn-save').eq(0).on('click', function () {
                self.save($('#qrcode img')[0].src, self.input[0].value);
            });

            // over
            $('.lemon-btn-save').eq(0).on('mouseenter', function (e) {
                $(e.target).addClass('hover');
            });

            // out
            $('.lemon-btn-save').eq(0).on('mouseleave', function (e) {
                $(e.target).removeClass('hover');
            });
        }
    };

    return new View();
});
