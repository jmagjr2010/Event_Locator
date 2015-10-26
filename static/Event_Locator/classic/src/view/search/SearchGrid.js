Ext.define('Event_Locator.view.search.SearchGrid', {
	extend: 'Ext.window.Window',
	xtype: 'searchgrid',

	header: false,
	items: [{
		xtype: 'mainlist',
		shrinkWrap: 3
	}]
});