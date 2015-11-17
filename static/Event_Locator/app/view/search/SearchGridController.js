Ext.define('Event_Locator.view.search.SearchGridController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.searchgridcontroller',

	onItemSelected: function(sender, record) {
		var win = this.getView().win;
		if (win && win.isVisible())
			win.close();

		win = Ext.create({
			xtype: 'window',
			shrinkWrap: 3,
			title: record.data.name,
			html: record.data.description,
			autoScroll: true
		});

		this.getView().win = win;

		win.show();
	},
});