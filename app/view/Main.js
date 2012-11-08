

data = [ Ext.create('DelugeApp.model.TorrentModel', {
                                               name: 'Tony', 
                                               age: 3 }) ];
data1 = [];

torrentStore = Ext.create('DelugeApp.store.TorrentStore');

Ext.define("DelugeApp.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.dataview.NestedList', 'Ext.TitleBar', 'Ext.data.proxy.JsonP', 'Ext.Panel', 'DelugeApp.model.TorrentModel', 'DelugeApp.store.TorrentStore'],
    alias: "widget.mainview",
   
    config: {
        fullscreen: true,
        tabBarPosition: 'bottom',
        
        items: [
            {
                xtype: 'list',
                title: 'Torrents',
                iconCls: 'star',
                
                 itemTpl: '{name}',
                
                store: torrentStore,
                   
                detailCard: {
                    xtype: 'panel',
                    scrollable: true,
                    styleHtmlContent: true
                },
                
                listeners: {
                    itemtap: function(nestedList, list, index, target, record, e, eOpts) {
                        //this.getDetailCard().setHtml(record.get('content'));
                        //this.getStore().removeAll();
                        console.log("itemtap");
                    },
                    
                    leafitemtap: function(nestedList, list, index, target, record, e, eOpts) {
                        console.log("leafitemtap");
                    },
                    
                    load: function(nestedList, store, records, successful, operation, eOpts) {
                        console.log("load");
                    },
                    
                    containertap: function(nestedList, list, e, eOpts) {
                        console.log("containertap");
                    },
                    
                    selectionchange: function(nestedList, list, selections, eOpts) {
                        console.log("selectionchange");
                    }
                }
            }
        ]
    },

	initialize: function(){
        client.core.get_session_state({
            success: function(result) {
                //torrentStore.removeAll();
                Ext.each(result, function(torrentId) {
                    console.log("Torrent id is: " + torrentId);
                    client.core.get_torrent_status(torrentId, '', {
                        success: function(result) {
                            //console.log("Status: " + result.toString());
                            console.log("Name: " + result.name + " | " + result.total_done);
                            torrentStore.add( Ext.create('DelugeApp.model.TorrentModel', { name: result.name }) );
                        }
                    });
                });
                torrentStore.sync();
            }
        });
	}
});