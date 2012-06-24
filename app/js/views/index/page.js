define([
    'jquery',
    'underscore',
    'backbone',
    'views/button/section',
    'views/alert/section',
    'views/modal/section',
    'views/collapse/section',
    'views/redactor/section',
    'text!templates/index/page.html',
    'stickyNav'
], function ($, _, Backbone, ButtonSection, AlertSection, ModalSection, AccordionSection, RedactorSection, IndexPageTemplate) {
    var indexPage = Backbone.View.extend({



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

            this.$el.html(IndexPageTemplate);

            var buttonSection = new ButtonSection();

            this.$el.append(buttonSection.render().el);

            var alertSection = new AlertSection();

            this.$el.append(alertSection.render().el);

            var modalSection = new ModalSection();

            this.$el.append(modalSection.render().el);

            var accSection = new AccordionSection();

            this.$el.append(accSection.render().el);

            var redactorSection = new RedactorSection();

            this.$el.append(redactorSection.render().el);

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
    return indexPage;
});
