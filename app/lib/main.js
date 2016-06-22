'use strict';

/**
 * Enable dubug mode
 * This allow to console.log in a firefox default configuration
 */
require('sdk/preferences/service').set('extensions.sdk.console.logLevel', 'debug');

var data = require('sdk/self').data;
var tabs = require("sdk/tabs");
var { ActionButton } = require('sdk/ui/button/action');

// Create a button
var button = ActionButton({
    id: 'show-popup',
    label: 'RSS Lector',
    icon: {
        '16': './images/icon-16.png',
        '32': './images/icon-32.png',
        '64': './images/icon-64.png'
    },
    onClick: (event) => {
        const activeTab = tabs.activeTab;
        console.log("Button clicked, active tab:", activeTab);

        var worker = activeTab.attach({
            contentScriptFile: data.url("contentscript.js"),
        });

        console.log("Worker created", worker);
    }
});