/**
 * Main Application
 */
// Setup program structure
deluge = new Object();
deluge.ui = new Object();
 
Ext.application({
    name: 'DelugeApp',
    requires: [],
    
    // Application dependencies
    views: ['Main', 'TorrentList', 'Login', 'TorrentDetail'],
    model: ['TorrentModel'],
    store: ['TorrentStore'],
    controllers: ['LoginController', 'TorrentListController', 'TorrentDetailController'],
   

    launch: function() {
        console.log('App launch');

        deluge.config = new DelugeApp.Config();
                        
        deluge.client  = new Ext.ux.util.RpcClient({
            url: deluge.config.hostname + deluge.config.json_path
        });
        
        var loginView = { xtype: 'login' };
        
        Ext.Viewport.add([loginView]);
    }
});
