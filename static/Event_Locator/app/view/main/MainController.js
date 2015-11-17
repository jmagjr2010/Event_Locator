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
        // if (!btn.window) {
        //     btn.window = Ext.create({
        //         xtype: 'window',
        //         width: '100%',
        //         height: '100%',
        //         header: false,
        //         animateTarget: btn,
        //         items: [{
        //             xtype: 'mainlist',
        //             // hidden: true,
        //         }]
        //     });
        // }
        // var animate = {
        //     duration: 500,
        //     to: {
        //         width: 1000,
        //         opacity: 1
        //     },
        //     from: {
        //         width: 0,
        //         opacity: 0
        //     }
        // };

        // btn.window.showAt(0, btn.getY() + 32, animate);

        // console.log('here');
        // var TestObject = Parse.Object.extend("TestObject");
        // var testObject = new TestObject();
        // testObject.save({foo: "bar"}).then(function(object) {
        //   alert("yay! it worked");
        // });

        // Parse.Cloud.run('hello', { movie: 'The Matrix' }, {
        //     success: function(message) {
        //         Ext.Msg.alert('yay', message);
        //     },
        //     error: function(error) {
        //     }
        // });
        var location = this.getView().down('textfield[name=location]').getValue();
        var date     = this.getView().down('datefield[name=start_date]').getValue().toJSON().substring(0,19);
        console.log(date);
        console.log(location);
        var params = {
            'location':location,
            'start_date':date
        };

        console.log(params);
        var jsonObject;
        var EventData = new Array();
        var me = this;

        Parse.Cloud.run('getEventbriteEvents', params, {
            success: function(eventData) {
                jsonObject = JSON.parse(eventData);
                console.log(jsonObject);
                Ext.each(jsonObject.events, function(eventObj, index, events) {
                    var date = new Date(eventObj.start.utc).toLocaleString();
                    var newObj = {'name': eventObj.name.html, 'url': eventObj.url, 'start_date': date, 'description': eventObj.description.html}
                    EventData.push(newObj);
                });

                me.showGrid(EventData);
            },
            error: function(error) {
                console.log("Error:" + error);
            }
        });

        // this.getView().down('searchgrid').data = EventData;
        // this.getView().down('searchgrid').show();
    },

    showGrid: function(EventData) {
        this.getView().down('searchgrid').getStore().setData(EventData);
        this.getView().down('searchgrid').show();
        console.log(EventData);
    },

    logOutOfPage: function (btn, e) {
        window.location.assign('/index.html');
    }
});
