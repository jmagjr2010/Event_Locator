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

    onClickButton: function() {
        localStorage.removeItem('UserLoggedIn');
        this.getView().destroy();
        Ext.widget('login');
    },

    onSearch: function (btn, e) {
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
        var localeField = this.getView().down('textfield[name=location]');
        var dateField   = this.getView().down('textfield[name=start_date]');
        var location    = localeField.getValue();
        var date        = dateField.getValue();

        if (!localeField.isValid() || !dateField.isValid())
            return false;

        console.log(date);
        console.log(location);
        date.toJSON().substring(0,19);
        
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
                    var startDate = new Date(eventObj.start.utc).toLocaleString();
                    var endDate   = new Date(eventObj.end.utc).toLocaleString();
                    var logoURL;

                    if (typeof eventObj.start.utc != 'string')
                        startDate = "N/A";
                    if (typeof eventObj.end.utc != 'string')
                        endDate = "N/A";

                    if (eventObj.logo == null)
                        logoURL = "http://vignette4.wikia.nocookie.net/supahninjas/images/f/fd/800px-No_Image_Wide.png/revision/latest?cb=20130801184125";
                    else
                        logoURL = eventObj.logo.url;

                    var newObj = {
                        'logo': logoURL,
                        'name': eventObj.name.html,
                        'url': eventObj.url,
                        'start_date': startDate,
                        'end_date': endDate,
                        'location': jsonObject.location.address,
                        'description': eventObj.description.html
                    };
                    EventData.push(newObj);
                });

                me.showGrid(EventData);
            },
            error: function(error) {
                console.log("Error:" + error);
                Ext.Msg.alert('Error', error);
            }
        });
    },

    showGrid: function(EventData) {
        this.getView().down('searchview').getStore().setData(EventData);
        this.getView().down('searchview').show();
    },

    logOutOfPage: function (btn, e) {
        window.location.assign('/index.html');
    }
});
