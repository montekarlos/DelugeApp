
Ext.define('DelugeApp.store.TorrentStore', {
    extend: 'Ext.data.TreeStore',
    requires: 'DelugeApp.model.TorrentModel',
    
    config: {
        model: 'DelugeApp.model.TorrentModel',
        data: data,
        autoSync: true
    }
});