define([
    'jquery',
    'underscore',
    'backbone',
    'http',
    'text!templates/error/page.html'
], function ($, _, Backbone, Http, errorPageTemplate) {

    var ErrorPage = Backbone.View.extend({
        el:'.page',

        errorPageTemplate:_.template(errorPageTemplate),

        initialize:function (options) {
            this.number = options.number;
            this.description = options.description;
        },
        render:function () {

            $(this.el).html(this.errorPageTemplate({number:this.number, description:this.description}));
        }
    });
    return ErrorPage;
});