define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/footer/footer.html'
], function ($, _, Backbone, FooterTemplate) {
    var FooterView = Backbone.View.extend({
        el:'.footer',
        initialize:function () {
            /* initialization procedures here */
        },
        render:function () {
            this.$el.html(FooterTemplate);
        },
        clean:function () {
        }
    })

    return FooterView;
});
