/**
 *
 * ModalConfirmView object
 *
 * Displays a modal confirm box
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/msg/modal/confirm.html',
    'bootstrapModal'
], function ($, _, Backbone, modalTemplate) {

    var ModalConfirmView = Backbone.View.extend({
        /**
         * Element's id
         */
        id:"modal",

        /**
         * Setup template
         */
        modalTemplate:_.template(modalTemplate),

        /**
         * setup dialog's events
         */
        events:{
            "click .confirm":"confirm",
            "click .cancel":"cancel"
        },

        /**
         * Backbone's initialize event
         */
        initialize:function (options) {
            _.bindAll(this, 'render');

            this.header = options.header;
            this.body = options.body;
            this.buttonLabel = options.buttonLabel || 'delete';
            this.onConfirm = options.onConfirm || $.noop;
            this.onCancel = options.onCancel || $.noop;
        },

        /**
         * Renders dialog and attaches events
         */
        render:function () {
            this.$el.html(this.modalTemplate({
                header:this.header,
                body:this.body,
                buttonLabel:this.buttonLabel
            }));

            this.delegateEvents();
            return this;
        },

        /**
         *
         * The confirm button has been clicked. Hide dialog and
         * trigger global event
         */
        confirm:function (event) {
            event.preventDefault();
            this.$el.modal('hide');

            this.close();

            if (_.isFunction(this.onConfirm)) {
                this.onConfirm();
            }
        },

        /**
         * Cancel triggered. Hide dialog, clear resources
         */
        cancel:function (event) {
            event.preventDefault();
            this.$el.modal('hide');

            this.close();
            if (_.isFunction(this.onCancel)) {
                this.onCancel();
            }
        },

        /**
         * Clears and unbinds events
         */
        close:function () {
            this.undelegateEvents();
            this.remove();
        }

    });

    return ModalConfirmView;
});
