Ext.define("DelugeApp.controller.TorrentDetailController", {
    extend: "Ext.app.Controller",
    
    config: {
        refs: {
            torrentDetail: 'torrentdetail'
        },
        control: {
            torrentDetail: {
                backCommand: "onBackCommand"
            }
        }
    },

    // Commands
    onBackCommand: function(obj) {
        console.log("onBackCommand handling");
        Ext.Viewport.remove(this.getTorrentDetail(), false);
        Ext.Viewport.add(this.getTorrentList());
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