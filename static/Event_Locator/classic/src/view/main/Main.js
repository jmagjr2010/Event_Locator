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
            iconCls: 'fa fa-user',
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
            iconCls: 'fa fa-search',
            width: 90,
            height: 32,
            listeners: {
                click: 'onSearch'
            }
        }, {
            xtype: 'textfield',
            labelAlign: 'top',
            fieldLabel: 'City',
            allowBlank: false,
            name: 'location',
            margin: '0 20 0 20',
            width: 300,
            labelStyle: 'color: white; font-size: 1.2em;',
            emptyText: 'City Name / address/ zip code..',
            // height: 40
        }, {
            xtype: 'textfield',
            labelAlign: 'top',
            fieldLabel: 'Radius',
            allowBlank: false,
            name: 'radius',
            margin: '0 20 0 5',
            width: 65,
            labelStyle: 'color: white; font-size: 1.2em;',
            emptyText: '0',
            inputType: 'number'
        }, {
            xtype: 'datefield',
            labelAlign: 'top',
            name: 'start_date',
            fieldLabel: 'Start Date',
            emptyText: 'Start Date of Event',
            margin: '0 20 0 5',
            allowBlank: false,
            format: 'Y-m-d',
            width: 200,
            labelStyle: 'color: white; font-size: 1.2em;'
        },{
            xtype: 'datefield',
            labelAlign: 'top',
            name: 'end_date',
            fieldLabel: 'End Date',
            emptyText: 'End Date of Event',
            allowBlank: false,
            format: 'Y-m-d',
            width: 200,
            labelStyle: 'color: white; font-size: 1.2em;'
        }]
    }, {
        xtype: 'panel',
        name: 'searchPanel',
        width: '100%',
        height: 475,
        header: false,
        hidden: true,
        dockedItems: [{
            xtype: 'toolbar',
            dock: 'bottom',
            cls: 'view-toolbar',
            name: 'viewTools',
            items: [{
                xtype: 'button',
                iconCls: 'fa fa-refresh',
                text: 'Refresh',
                action: 'refreshview',
                cls: 'search-view-button',
                listeners: {
                    click: 'onSearch'
                }
            }, {
                xtype: 'tbfill'
            }, {
                xtype: 'label',
                action: 'pageCheck',
                cls: 'page-check',
                // listeners: {
                //     afterrender: 'setLabel'
                // }
            }, {
                xtype: 'button',
                iconCls: 'fa fa-hand-o-left',
                text: 'Previous Page',
                action: 'change',
                cls: 'search-view-button',
                listeners: {
                    click: 'prevPage'
                }
            }, {
                xtype: 'button',
                iconCls: 'fa fa-hand-o-right',
                text: 'Next Page',
                action: 'change',
                cls: 'search-view-button',
                listeners: {
                    click: 'nextPage'
                }
            }]
        }],
        items: [{
            xtype: 'searchview'
        }],
        listeners: {
            boxReady: 'layoutView'
        }
    }],

    listeners: {
        resize: 'resizeView'
    }
});
