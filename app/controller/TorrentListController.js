Ext.define("DelugeApp.controller.TorrentListController", {
    extend: "Ext.app.Controller",
    
    config: {
        refs: {
            torrentList: 'mainview'
        },
        control: {
            torrentList: {
                selectTorrent: "onSelectTorrent"
            }
        }
    },

    // Commands
    onSelectTorrent: function(list, record) {
        console.log("selected torrent: " + record);
        Ext.Viewport.remove(this.getTorrentList(), false);
        var detailView = new Ext.create('DelugeApp.view.TorrentDetail', { 
            torrentDetail: record 
        });
        Ext.Viewport.add(detailView);

    },
    
    // Init functions
    launch: function() {
        this.callParent();
    },
    
    init: function() {
        self = this;
        this.callParent();
    }
});