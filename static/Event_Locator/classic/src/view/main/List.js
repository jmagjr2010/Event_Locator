/**
 * This view is an example list of people.
 */
Ext.define('Event_Locator.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'Event_Locator.store.Personnel'
    ],

    // header: false,
    // width: '100%',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name', dataIndex: 'name', flex: 0.2  },
        { text: 'City', dataIndex: 'city', flex: 0.2  },
        { text: 'Type', dataIndex: 'type', flex: 0.2  },
        { text: 'Day',  dataIndex: 'day',  flex: 0.2  },
        { text: 'Time', dataIndex: 'time', flex: 0.2  }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
