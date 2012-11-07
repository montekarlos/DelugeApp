/**
 * Main Application
 */
Ext.application({
    name: 'DelugeApp',
    requires: ['DelugeApp.view.Main', 'DelugeApp.view.Login', 'DelugeApp.Config'],

    launch: function() {
        console.log('App launch');
        config = new DelugeApp.Config();
        
        loginView = new DelugeApp.view.Login();
		//mainView = new DelugeApp.view.Main();
		
		// state = 0;// 0 logged out, 1 logged in
        
        client = new Ext.ux.util.RpcClient({
            url: config.hostname + config.json_path
        });
        
        Ext.Viewport.add(loginView);
    }
});
