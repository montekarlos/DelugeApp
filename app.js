//We've added a third and final item to our tab panel - scroll down to see it
Ext.application({
    name: 'DelugeApp',
    requires: ['DelugeApp.view.Main', 'DelugeApp.view.Login'],

    launch: function() {
        console.log('App launch');
        var mainView = {
            xtype: 'mainview'
        };
        
        var loginView = {
            xtype: 'login'
        };
        
        client = new Ext.ux.util.RpcClient({
            url: 'http://localhost:8112/json'
        });
        
        //Ext.Viewport.add([mainView]);
        Ext.Viewport.add([loginView]);
    }
});
