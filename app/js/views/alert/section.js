define([
    'jquery',
    'backbone',
    'underscore',
    'text!templates/alert/section.html',
    'backboneBUI'
], function ($, Backbone, _, AlertSectionTemplate) {

    var AlertSection = Backbone.View.extend({

        render:function () {

            this.$el.html(AlertSectionTemplate);

            var that = this;

            /* render all types of alerts */
            var alertError = new Backbone.BUI.Alert({
                ctype:Backbone.BUI.Config.Alert.ERROR,
                title:'This is a test title',
                message:'This is a test message',
                renderTo:this.$('#alert-error'),
                timeout:null
            });
            alertError.render();

            var alertSuccess = new Backbone.BUI.Alert({
                ctype:Backbone.BUI.Config.Alert.SUCCESS,
                title:'This is a test title',
                message:'This is a test message',
                renderTo:this.$('#alert-success'),
                timeout:null
            });
            alertSuccess.render();

            var alertInfo = new Backbone.BUI.Alert({
                ctype:Backbone.BUI.Config.Alert.INFO,
                title:'This is a test title',
                message:'This is a test message',
                renderTo:this.$('#alert-info'),
                timeout:null
            });
            alertInfo.render();
            return this;
        }
    });


    return AlertSection;
});
