define([
    'jquery',
    'backbone',
    'underscore',
    'text!templates/redactor/section.html',
    'backboneBUI'
], function ($, Backbone, _, RedactorSectionTemplate) {

    var RedactorSection = Backbone.View.extend({

        render:function () {

            this.$el.html(RedactorSectionTemplate);

            /* lets try redactor */

            var redactor = new Backbone.BUI.Redactor(
                {
                    renderTo:this.$('#sample-redactor'),
                    width:'650px',
                    attributes:{'style':'height:250px'}
                });

            redactor.render();
            return this;
        }
    });


    return RedactorSection;
});
