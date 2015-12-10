Ext.define('Event_Locator.view.search.SearchView', {
	extend: 'Ext.view.View',
	xtype: 'searchview',

	requires: [
		'Event_Locator.store.Events',
        'Event_Locator.view.search.SearchGridController'
	],

	controller: 'searchgridcontroller',
	header: false,
	cls: 'search-view',
	width: '100%',
	height: '100%',
	autoScroll: true,
	itemSelector: 'div.thumb-wrap',
	trackOver: true,
	overItemCls: 'thumb-wrap-over',
	selectedItemCls: 'thumb-wrap-selected',
	// shrinkWrap: 3,
	border: '3 3 0 3',
	pageNum: 1,
	pageCount: 1,

	store: {
		type: 'events'
	},

	tpl: [
		'<tpl for=".">',
	        '<div class="thumb-wrap">',
	          '<div class="logo-name-box">',
	          	'<div class="event-logo" style="background-image: url({logo});"></div>',
	          '</div>',
	          '<div class="info-section">',
	          	  '<div class="event-name-box">',
		          	  '<a href="{url}" class="event-name">{name}</a>',
		          '</div>',
		          '<div class="info-sub-section">',
			          '<div class="event-label-box">',
			          	'<span class="event-label">Start Date:</span>',
			          	'<span class="event-label">End Date:</span>',
			          	'<span class="event-label">Location:</span>',
			          '</div>',
			          '<div class="event-info-box">',
			          	'<span class="event-date">{start_date}</span>',
			          	'<span class="event-date">{end_date}</span>',
			          	'<span class="event-locale">{location}</span>',
			          '</div>',
			      '</div>',
			  '</div>',
	        '</div>',
	    '</tpl>'
	],

	listeners: {
		itemdblclick: 'onItemSelected',
		resize: 'resizeView',
		boxReady: 'resizeView',
	}
});