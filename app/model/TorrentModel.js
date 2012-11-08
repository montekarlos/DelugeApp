Ext.define('DelugeApp.model.TorrentModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'name', type: 'string' },
            {name: 'eta', type: 'int'},
            {name: 'label', type: 'string' },
            {name: 'progress', type: 'int' },
            {name: 'ratio', type: 'float'},
            {name: 'hash', type: 'string'},
            {name: 'total_done', type: 'int' }, // bytes
            {name: 'total_size' , type: 'int' } // bytes
        ]
    }
});