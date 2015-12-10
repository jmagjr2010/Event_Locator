Ext.define('Event_Locator.view.login.Login',{
	extend: 'Ext.window.Window',
	xtype: 'login',

	requires: [
	    'Event_Locator.view.login.LoginController',
	    'Ext.form.Panel'
	],

	controller: 'login',
	cls: 'login-window',
	bodyPadding: 10,
	title: 'Event Locator Login',
	closable: false,
	autoShow: true,

	items: {
	    xtype: 'form',
	    reference: 'form',
	    items: [{
		xtype: 'textfield',
		name: 'username',
		fieldLabel: 'Username',
		allowBlank: false
	    }, {
		xtype: 'textfield',
		name: 'password',
		inputType: 'password',
		fieldLabel: 'Password',
		allowBlank: false
	    }, {
		xtype: 'displayfield',
		hideEmptyLabel: false,
		value: 'Enter any non-blank password'
	    }],
	    buttons: [{
		text: 'Login',
		// formBind: true,
		listeners: {
		    click: 'onLoginClick'
	        }
	    }]
	}
});
