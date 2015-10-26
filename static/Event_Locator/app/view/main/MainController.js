/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Event_Locator.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    onSearch: function (btn, e) {
        if (!btn.window) {
            btn.window = Ext.create({
                xtype: 'window',
                width: '100%',
                height: '100%',
                header: false,
                animateTarget: btn,
                items: [{
                    xtype: 'mainlist',
                    // hidden: true,
                }]
            });
        }
        var animate = {
            duration: 500,
            to: {
                width: 1000,
                opacity: 1
            },
            from: {
                width: 0,
                opacity: 0
            }
        };

        btn.window.showAt(0, btn.getY() + 32, animate);
    },

    logOutOfPage: function (btn, e) {
        window.location.assign('/index.html');
    }
});
