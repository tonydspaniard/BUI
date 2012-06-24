define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    var views = {};

    return {
        create:function (context, name, View, options) {
            this.clean(name);
            var view = new View(options);
            views[name] = view;
            /* TODO: refactor children, what happens to the others attached to main context? */
            if (typeof context.children === 'undefined') {
                context.children = {};
                context.children[name] = view;
            } else {
                context.children[name] = view;
            }
            Backbone.Events.trigger('view:created');
            return view;
        },
        clean:function (name) {
            if (!_.isUndefined(views[name])) {

                views[name].undelegateEvents();
                views[name].unbind();
                if (_.isFunction(views[name].clean)) {
                    views[name].clean();
                }
            }
            Backbone.Events.trigger('view:cleaned');
        }
    }
});
