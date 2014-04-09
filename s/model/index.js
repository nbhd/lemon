define(function () {

    var Model = function () {};

    Model.prototype = {

        init: function () {
            console.log('init model');
        }
    };

    return new Model();
});
