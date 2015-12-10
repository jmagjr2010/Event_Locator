Ext.define('Event_Locator.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function() {
    	var user = this.getView().down('form > textfield[name=username]');
    	var pwd  = this.getView().down('form > textfield[name=password]');

    	if (user.getValue() != 'admin') {
    		return false;
    	}
    	
		localStorage.setItem("UserLoggedIn", true);
		this.getView().destroy();
		// Ext.widget('app-main');
		Ext.create({
			xtype: 'app-main'
		});
    }
});
