define([
    'jquery',
    'underscore',
    'backbone',
    'vm'
], function ($, _, Backbone, Vm) {
    var AppView = Backbone.View.extend({

        render:function () {

            var self = this;

            require(['views/index/page'], function (IndexPageView) {
                var indexPageView = Vm.create(self, 'IndexPageView', IndexPageView);

                indexPageView.render();
            });

            require(['views/footer/footer'], function (FooterView) {
                var footerView = Vm.create(self, 'FooterView', FooterView);
                footerView.render();
            });
        }
    });
    return AppView;
});
