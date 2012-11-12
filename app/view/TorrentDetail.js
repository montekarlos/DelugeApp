Ext.define('DelugeApp.view.TorrentDetail', {
    extend: 'Ext.Container',
    alias: 'widget.torrentdetail',
    
    config: {
        fullscreen: true,
        scrollable: true
    },
    
    initialize: function() {
        this.callParent(arguments);
        
        var backBtn = {
            xtype: 'button',
            text: 'torrents',
            ui: 'action',
            handler: this.onBackButtonTap
        };
        
        var topToolBar = {
            xtype: 'toolbar',
            docked: 'top',
            title: 'detail',
            items: [backBtn]
        };
        
        var descriptionArea = {
            xtype: 'textareafield',
            label: 'Info'
        };
                
        this.add([topToolBar, descriptionArea]);
    },
    
    onBackButtonTap: function() {
        console.log("this is: " + this.self);
        this.fireEvent("backCommand", this);
        console.log("fired back event");
    }
});