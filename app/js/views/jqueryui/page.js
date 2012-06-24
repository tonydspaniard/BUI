define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/jquery/page.html',
    'stickyNav'
], function ($, _, Backbone, JQueryUIPageTemplate) {
    var jqueryUiPage = Backbone.View.extend({



        /**
         * Template element selector
         */
        el:'.main',

        /**
         * Backbone's initialize method
         */
        initialize:function () {
        },

        /**
         * Renders the login
         */
        render:function () {

            var that = this;

            this.$el.html(JQueryUIPageTemplate);

            /* pretty print is with google prettify library */
            if ($.isFunction(prettyPrint)) {
                prettyPrint();
            }

        },
        /**
         * Clears resources
         */
        clean:function () {
            this.$el.html('');
        }
    });
    return jqueryUiPage;
});
