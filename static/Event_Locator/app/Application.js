/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Event_Locator.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Event_Locator',

    stores: [
        'Event_Locator.store.Events'
    ],

    views: [
        'Event_Locator.view.search.SearchGrid'
    ],
    
    launch: function () {
        // TODO - Launch the application
        Parse.initialize("yfu0Rc9ON0WmTPczXt82CLnqsrtVIDVctnUGAgkI", "rC0NI3RC7OZaztXGnStQrv7plIiuOE35tELXHiwM");
        console.log('parse initialized');

        // Ext.enableAriaButtons = false;
        // Ext.enableAriaPanels = false;
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
