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
			autoScroll: true,
			maxWidth: 800,
			maxHeight: 700,
			resizable: true
		});

		this.getView().win = win;

		win.show();
	},

	resizeView: function(view, width, height) {
		// if (width < 1008) {
		// 	view.up('panel').setWidth(495);
		// }
		// else if (width < 1500) {
		// 	view.up('panel').setWidth(1008);
		// }
		// else {
		// 	view.up('panel').setWidth(1500);
		// }
		// console.log('resized');
	}
});