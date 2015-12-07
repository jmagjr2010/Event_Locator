Ext.define('Event_Locator.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function() {
	localStorage.setItem("UserLoggedIn", true);
	this.getView().destroy();
	Ext.widget('app-main');
	console.log('here');

    }
});
