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

    logOutOfPage: function() {
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
        var end_date    = this.getView().down('textfield[name=end_date]');
        var radius      = this.getView().down('textfield[name=radius]');
        var location    = localeField.getValue();
        var date        = dateField.getValue();
        var end         = end_date.getValue();
        var within      = radius.getValue().concat('mi');
        var view        = this.getView().down('panel[name=searchPanel] > searchview');

        if (!localeField.isValid() || !dateField.isValid() || !end_date.isValid() || !radius.isValid()) {
            return false;
        }

        if (btn.action != 'change') {
            view.pageNum = 1;
        }

        view.up('panel').show();
        view.mask('loading');

        if (!localeField.isValid() || !dateField.isValid())
            return false;

        date = date.toISOString().substring(0,16).concat(':00Z');
        end  = end.toISOString().substring(0,16).concat(':00Z');
        
        var params = {
            'location': location.replace(' ', '_'),
            'within': within,
            'startDate': date,
            'endDate': end,
            'page': view.pageNum
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
                
                view.pageCount = jsonObject.pagination.page_count;
                me.showGrid(EventData);
            },
            error: function(error) {
                console.log("Error:" + error);
                Ext.Msg.alert('Error', error);
            }
        });
    },

    showGrid: function(EventData) {
        this.getView().down('panel[name=searchPanel] > searchview').getStore().setData(EventData);
        this.setLabel();
        // this.getView().down('searchview').show();
        // this.getView().down('searchview').unMask();
    },

    layoutView: function(panel, width, height) {
        if (window.innerWidth < 1008) {
            panel.setWidth(515);
        }
        else if (window.innerWidth < 1500) {
            panel.setWidth(1008);
        }
        else {
            panel.setWidth(1500);
        }
        console.log('resized');
    },

    resizeView: function(main, width, height) {
        this.layoutView(main.down('panel[name=searchPanel]'), width, height);
    },

    nextPage: function(btn, e) {
        var view = this.getView().down('panel[name=searchPanel] > searchview');

        if (view.pageNum == view.pageCount)
            return false;
        else
            view.pageNum += 1;

        this.setLabel();
        this.onSearch(btn, e);
    },

    prevPage: function(btn, e) {
        var view = this.getView().down('panel[name=searchPanel] > searchview');

        if (view.pageNum == 1)
            return false;
        else
            view.pageNum -= 1;

        this.setLabel();
        this.onSearch(btn, e);
    },

    setLabel: function() {
        var view = this.getView().down('panel[name=searchPanel] > searchview');
        var label = this.getView().down('toolbar[name=viewTools] > label[action=pageCheck]');
        var pageNum = view.pageNum;
        var pageCount = view.pageCount;
        var text = Ext.String.format('Page {0} of {1}', pageNum, pageCount);

        label.setText(text);
    }
});
