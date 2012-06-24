/**
 *
 * AlertView object
 *
 * Renders an inline alert message
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/msg/alert.html',
    'bootstrapAlert'
], function ($, _, Backbone, alertTemplate) {

    var AlertView = Backbone.View.extend({

        className:"alert-view",

        /**
         * Setup the template
         */
        alertTemplate:_.template(alertTemplate),

        /**
         * Events attached to the close method
         */
        events:{
            "click .close":"close"
        },

        /**
         * Backbone's initialize method
         */
        initialize:function (options) {
            _.bindAll(this, 'render');

            this.msg = options.msg;
            this.type = options.type;

            // display alert
            this.$el.alert();
        },

        /**
         * Renders the alert HTML
         */
        render:function () {
            this.$el.html(this.alertTemplate({
                msg:this.msg,
                type:this.type
            }));

            var self = this;
            setTimeout(function () {
                self.$el.fadeOut('slow', function () {
                    self.close();
                });
            }, 5000);

            return this;
        },

        /**
         * Removes and unbinds methods
         */
        close:function () {
            this.undelegateEvents();
            this.remove();

        }

    });

    return AlertView;
});
