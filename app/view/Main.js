deluge.torrentStore = Ext.create('DelugeApp.store.TorrentStore');

Ext.define("DelugeApp.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.dataview.NestedList', 'Ext.TitleBar', 'Ext.data.proxy.JsonP', 'Ext.Panel'],
    alias: "widget.mainview",
      
    config: {
        fullscreen: true,
        tabBarPosition: 'bottom'
    },
    
    onTorrentsListDisclose: function (list, record, target, index, evt, options) {
        this.fireEvent("selectTorrent", this, record);
        console.log("Fire event list disclose: " + record);
    },

    initialize: function(){
        this.callParent(arguments);
                
        var addButton = {
            xtype: 'button',
            text: 'New',
            ui: 'action',
            handler: this.onAddButtonTap,
            scope: this
        };
        
        var topToolbar = {
            xtype: 'toolbar',
            title: 'Torrents',
            docked: 'top',
            items: [ { xtype: 'spacer' }, addButton ]
        };
        
        
        var torrentList = {
            xtype: 'torrentlist',
            
            store: deluge.torrentStore,
                        
            listeners: {
                disclose: { fn: this.onTorrentsListDisclose, scope: this }
            }
        };
        
        this.add([topToolbar, torrentList]);
    
        deluge.client.web.update_ui('', '', {
            success: function(result) {
                //console.log(result);
                //console.log(result.torrents);
                Ext.iterate(result.torrents, function(torrentId, torrentInfo) {
                    deluge.torrentStore.add(torrentInfo);
                    //console.log(torrentInfo);
                });
            }
        });
	}
});