/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Event_Locator.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'Event_Locator.view.main.MainController',
        'Event_Locator.view.main.MainModel',
        'Event_Locator.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',
    bodyCls: 'main-body',

    // ui: 'navigation',

    // tabBarHeaderPosition: 1,
    // titleRotation: 0,
    // tabRotation: 0,

    header: false,
    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'middle',
    },

    // responsiveConfig: {
    //     tall: {
    //         headerPosition: 'top'
    //     },
    //     wide: {
    //         headerPosition: 'left'
    //     }
    // },
    items: [{
        xtype: 'image',
        src: '/resources/images/Event_Locator_Logo.png',
        cls: 'app-logo',
        alt: 'Logo for website',
        margin: '30 0 30 0',
        width: 800,
        height: 129
    }, {
        xtype: 'fieldcontainer',
        layout: {
            type: 'hbox',
            pack: 'middle'
        },
        items: [{
            xtype: 'button',
            text: 'Search',
            width: 90,
            height: 32
        }, {
            xtype: 'textfield',
            width: 500,
            emptyText: 'Location, Distance, Data'
            // height: 40
        }]
    }]
});
