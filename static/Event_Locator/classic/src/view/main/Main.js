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
        'Ext.form.field.Date',
        'Ext.form.field.Text',
        'Ext.layout.container.VBox',
        'Ext.Img',

        'Event_Locator.view.main.MainController',
        'Event_Locator.view.main.MainModel',
        'Event_Locator.view.search.SearchGrid',
    ],

    controller: 'main',
    viewModel: 'main',
    bodyCls: 'main-body',

    header: false,
    layout: {
        type: 'vbox',
        align: 'center',
    },

    dockedItems: [{
        xtype: 'toolbar',
        cls: 'top-toolbar',
        dock: 'top',
        items: ['->',{
            text: "User: Admin",
            cls: 'user-button',
            menu: [{
                cls: 'menu-user-button',
                text: 'logout',
                listeners: {
                    click: 'logOutOfPage'
                }
            }]
        }]
    }],

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
        margin: '180 0 30 0',
        width: 800,
        height: 129
    }, {
        xtype: 'fieldcontainer',
        layout: {
            type: 'hbox',
            pack: 'middle',
            align: 'end',
        },
        items: [{
            xtype: 'button',
            text: 'Search',
            action: 'search',
            cls: 'search-button',
            width: 90,
            height: 32,
            listeners: {
                click: 'onSearch'
            }
        }, {
            xtype: 'textfield',
            labelAlign: 'top',
            fieldLabel: 'Location',
            allowBlank: false,
            name: 'location',
            margin: '0 20 0 20',
            width: 300,
            labelStyle: 'color: white; font-size: 1.2em;',
            // emptyText: 'Location, Distance, Data'
            // height: 40
        }, {
            xtype: 'datefield',
            labelAlign: 'top',
            name: 'start_date',
            fieldLabel: 'Start Date',
            allowblank: false,
            format: 'Y-m-d',
            width: 200,
            labelStyle: 'color: white; font-size: 1.2em;'
        }]
    }, {
        xtype: 'searchview',
        hidden: true
    }]
});
