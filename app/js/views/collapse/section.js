define([
    'jquery',
    'backbone',
    'underscore',
    'text!templates/collapse/section.html',
    'backboneBUI'
], function ($, Backbone, _, CollapseSectionTemplate) {

    var AccordionSection = Backbone.View.extend({

        render:function () {

            this.$el.html(CollapseSectionTemplate);

            var accordion = new Backbone.BUI.Accordion({
                renderTo:this.$('#sample-accordion'),
                groups:[
                    {
                        header:'Collapsible Group Item #1',
                        content:'This is default content of Group Item #1 <b>hello</b>'
                    },
                    {
                        header:'Collapsible Group Item #2',
                        /*content:'This is default content of Group Item #2 <b>hello from two</b>',*/
                        source:'http://localhost/bui/ajax-test.html'
                    }
                ]
            });
            accordion.render();

            return this;
        }
    });


    return AccordionSection;
});
