Ext.define('DelugeApp.view.TorrentList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.torrentlist',
    
    config: {
        loadingText: 'Loading Torrents...',
        emptyText: '</pre><div class="torrent-list-empty-text">No torrents found.</div>',
        onItemDisclosure: true,
        itemTpl: '</pre><div class="torrent-name-title">{name}</div><div class="torrent-name-label">{label}</div><pre>',
        
        iconCls: 'star',
        title: 'Torrents',
        scrollable: true,
    }


});