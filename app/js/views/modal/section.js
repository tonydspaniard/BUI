define([
    'jquery',
    'backbone',
    'underscore',
    'text!templates/modal/section.html',
    'backboneBUI'
], function ($, Backbone, _, ModalSectionTemplate) {

    var ButtonSection = Backbone.View.extend({

        render:function () {

            this.$el.html(ModalSectionTemplate);

            var that = this;

            var alertButton = new Backbone.BUI.Button({
                ctype:Backbone.BUI.Config.Button.Styles.PRIMARY,
                renderTo:that.$('#alert-modal'),
                label:'Test Alert Modal'
            }, {
                'click':function () {
                    var alert = new Backbone.BUI.Modal({
                        header:'Modal Alert',
                        body:'This is a smooth modal test...',
                        onCancel:that.cancelAlert
                    });

                    alert.render();
                }
            });

            alertButton.render();

            var confirmButton = new Backbone.BUI.Button({
                ctype:Backbone.BUI.Config.Button.Styles.SUCCESS,
                renderTo:that.$('#confirm-modal'),
                label:'Test Confirm Modal'
            }, {
                'click':function () {
                    var confirm = new Backbone.BUI.Modal({
                        ctype:Backbone.BUI.Config.Modal.CONFIRM,
                        header:'Modal Confirm',
                        body:'This is a smooth modal test...',
                        onConfirm:that.confirm,
                        onCancel:that.cancelConfirm
                    });

                    confirm.render();
                }
            });

            confirmButton.render();

            return this;
        },
        cancelAlert:function () {
            alert('You just clicked Ok button of the alert modal. This alert is ugly isnt it?');
        },
        confirm:function () {
            alert('You just clicked the Confirm button.');
        },
        cancelConfirm:function () {
            alert('You just clicked Cancel button of the confirm modal.');
        }
    });


    return ButtonSection;
});
