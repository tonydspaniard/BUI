define([
    'jquery',
    'backbone',
    'underscore',
    'text!templates/button/section.html',
    'backboneBUI'
], function ($, Backbone, _, ButtonSectionTemplate) {

    var ButtonSection = Backbone.View.extend({

        render:function () {

            this.$el.html(ButtonSectionTemplate);

            var that = this;

            /* render all types of buttons */
            _.each(Backbone.BUI.Config.Button.Styles, function (t) {

                var button = new Backbone.BUI.Button({
                    ctype:t,
                    renderTo:that.$('#' + t),
                    label:'Test ' + t
                }, {
                    'click':function () {
                        alert('Hello from ' + t);
                    }
                });

                button.render();
            });

            /* render all sizes */
            _.each(Backbone.BUI.Config.Button.Sizes, function (s) {
                _.each(['btn-primary', ''], function (t) {
                    var button = new Backbone.BUI.Button({
                        ctype:t,
                        size:s,
                        renderTo:that.$('#btn-sizes'),
                        label:t.length ? 'Primary action' : 'Action'
                    });

                    button.render();

                    that.$('#btn-sizes').append('&nbsp;');
                });
                that.$('#btn-sizes').append('<p></p>');
            });

            /* render all types */
            _.each(['a', 'button'], function (tag) {
                _.each(['btn-primary', ''], function (t) {
                    var lbl = (tag == 'a' ? 'Link' : 'Button');
                    var button = new Backbone.BUI.Button({
                        tagName:tag,
                        ctype:t,
                        size:Backbone.BUI.Config.Button.Sizes.LARGE,
                        state:Backbone.BUI.Config.States.DISABLED,
                        renderTo:that.$('#btn-states'),
                        label:t.length ? 'Primary action ' + lbl : 'Action ' + lbl
                    });

                    button.render();

                    that.$('#btn-states').append('&nbsp;');
                });
                that.$('#btn-states').append('<p></p>');
            });

            /* render multiple element types */
            _.each(['a', 'button', 'input', 'submit'], function (tag) {

                var button = new Backbone.BUI.Button({
                    tagName:tag.match(/submit/) ? 'input' : tag,
                    attributes:tag.match(/submit/) ? {type:'submit'} : (tag.match(/input/) ? {type:'button'} : {}),
                    renderTo:that.$('#btn-multiple'),
                    label:tag
                });

                button.render();

                that.$('#btn-multiple').append('&nbsp;');
            });
            return this;
        }
    });


    return ButtonSection;
});
