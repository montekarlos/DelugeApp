Ext.define('DelugeApp.view.TorrentDetail', {
    extend: 'Ext.Container',
    
    config: {
        fullscreen: true,
        scrollable: true,
        
        layout: {
            type: 'vbox',
            pack: 'center',
        },
        
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'detail',
                
                items: [
                    {
                        xtype: 'button',
                        text: 'torrents',
                        
                        listeners: {
                            tap: function() {
                                Ext.Viewport.remove(detailView, false);
                                Ext.Viewport.add(mainView);
                            }
                        }
                    }
                ]
            },
            {
                xtype: 'textareafield',
                label: 'Info'
                //value: this.torrentDetail.name
            }
        ]
            
    },
    
    
    
});