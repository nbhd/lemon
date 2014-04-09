define(function () {

    var View = function () {};

    View.prototype = {

        init: function () {
            console.log('init view');
        }
    };

    return new View();
});
