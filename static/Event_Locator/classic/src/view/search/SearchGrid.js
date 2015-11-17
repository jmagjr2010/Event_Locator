Ext.define('Event_Locator.view.search.SearchGrid', {
	extend: 'Ext.grid.Panel',
	xtype: 'searchgrid',

	requires: [
        'Event_Locator.store.Events',
        'Event_Locator.view.search.SearchGridController'
    ],

    controller: 'searchgridcontroller',
	header: false,
	cls: 'search-grid',
	width: '100%',
	height: 500,
	autoScroll: true,

	store: {
        type: 'events'
    },

    columns: [
        { text: 'Name', dataIndex: 'name', flex: 0.4  },
        { text: 'URL', dataIndex: 'url', flex: 0.3  },
        { text: 'Date', dataIndex: 'start_date', flex: 0.3  },
    ],

    listeners: {
        select: 'onItemSelected'
    }
});