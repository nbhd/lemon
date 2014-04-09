define(function () {

    var Controller = function () {};

    Controller.prototype = {

        init: function () {
            console.log('init controller');
        }
    };

    return new Controller();
});
