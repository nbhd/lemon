define(function (require, module, exports) {

    var View = function () {};
    var $ = require('jquery');

    View.prototype = {

        init: function () {
            console.log('init view');

            var self = this;

            this.qrcode = new lemon.core.QRCode($('#qrcode')[0], {
                width: 300,
                height: 300
            });

            this.input = $('#url');
            this.input
                .on('blur', function () {

                    self.createQR();
                })
                .on('keyup', function (e) {
                    if (e.keyCode !== 13) {
                        return;
                    }

                    self.createQR();
                });

            $('#qrcode').on('click', function () {
                self.save($('#qrcode img')[0].src, self.input[0].value);
            })
        },

        createQR: function () {
            var url = this.input[0].value;

            this.qrcode.makeCode(url);
        },

        save: function (url, name){

            if (!url) {
                return;
            }

            var a = document.createElement('a');
            a.href = url;
            a.setAttribute('download', name || 'noname');
            a.dispatchEvent(new CustomEvent('click'));
        }
    };

    return new View();
});
