define(['model/index', 'view/index', 'controller/index'], function (model, view, controller) {

    var m = model;
    var v = view;
    var c = controller;

    var Index = function () {};

    Index.prototype = {

        init: function () {
            console.log('init index');
            m.init();
            v.init();
            c.init();
        }
    };

    return new Index();
});
