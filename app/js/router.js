/**
 * Application router
 *
 * Backbone routers are used for routing your applications URL’s when using hash tags(#)
 * @see http://backbonetutorials.com/what-is-a-router/
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'vm'
], function ($, _, Backbone, Vm) {

    var AppRouter = Backbone.Router.extend({
        /**
         * The routes hash maps URLs with parameters to functions
         * on your router, similar to the View's events hash.
         *
         * @see http://documentcloud.github.com/backbone/#Router-routes
         */
        routes:{
            '.*':'index', // /
            'index':'index', // #index
            'jquery-ui':'jquery-ui'

        }
    });

    /**
     * this method is called in every backboneJS object
     */
    var initialize = function (options) {

        var appView = options.appView;

        var router = new AppRouter(options);

        router.on('route:defaultAction route:index', function () {
            appView.render();
        });

        router.on('route:jquery-ui', function () {
            require(['views/jqueryui/page'], function (JQueryUIPage) {
                var jqueryView = Vm.create(appView, 'IndexPageView', JQueryUIPage);

                jqueryView.render();
            });
        });

        // initialize Backbone custom extensions
        Backbone.View.prototype.goTo = function (loc, options) {
            router.navigate(loc, _.extend({trigger:true}, options || {}));
        }

        // start the router
        Backbone.history.start();

    }

    return {
        initialize:initialize
    };
});