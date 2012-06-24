/**
 *
 * ModalAlertView object
 *
 * Displays a modal alert
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/msg/modal/alert.html',
    'bootstrapModal'
], function ($, _, Backbone, modalTemplate) {

    var ModalAlertView = Backbone.View.extend({
        /**
         * set element's id
         */
        id:"modal",

        /**
         * set modal template
         */
        modalTemplate:_.template(modalTemplate),

        /**
         * setup events
         */
        events:{
            "click .btn-cancel":"cancel"
        },

        /**
         * Backbone initialize event
         */
        initialize:function (options) {
            _.bindAll(this, 'render');

            this.header = options.header;
            this.body = options.body;
        },

        /**
         * Render alert box
         */
        render:function () {
            this.$el.html(this.modalTemplate({
                header:this.header,
                body:this.body
            }));

            this.delegateEvents();
            return this;
        },

        /**
         * User clicked on cancel button
         */
        cancel:function (event) {
            event.preventDefault();

            this.$el.modal('hide');

            this.close();
        },

        /**
         * Free resources
         */
        close:function () {
            this.undelegateEvents();
            this.remove();
        }

    });

    return ModalAlertView;
});
