/**
 * main configuration file
 */
// Use ECMAScript 5 Strict Mode
"use strict";

// Define jQuery as AMD module
define.amd.jQuery = true;

// Require.js allows us to configure mappings to paths
// as demonstrated below:
// TODO: Load minified version of the libs or use Require.js's JS compiler (R)
require.config({
    paths:{

        /* jquery + jquery-ui + jquery-plugins*/
        jquery:'libs/jquery/jquery-1.7.1.min',

        /* underscore */
        underscore:'libs/underscore/underscore',
        underscoreString:'libs/underscore/underscore.string',

        /* backbone and some goodies */
        backbone:'libs/backbone/backbone',
        backboneRelational:'libs/backbone/backbone-relational',
        backboneBinder:'libs/backbone/backbone.model-binder',
        backboneValidation:'libs/backbone/backbone.validation',

        /* bui */
        backboneBUI:'libs/bui/backbone-bui',

        /* requirejs plugins*/
        text:'libs/require/text',
        order:'libs/require/order',
        domReady:'libs/require/domReady',

        /* utility libraries */
        stickyNav:'libs/utils/sticky-nav',

        /* a shortcut to have the templates outside of the js directory */
        templates:'../templates'
    },
    waitSeconds:15
});

// Let's kick off the application

require([
    'views/app',
    'router',
    'vm',
    'jquery'
], function (AppView, Router, Vm) {

    var appView = Vm.create({}, 'AppView', AppView);

    Router.initialize({appView:appView});  // The router now has a copy of all main appview
});
