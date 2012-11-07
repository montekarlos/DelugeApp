Ext.define('Torrent', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'name', type: 'string'},
			{name: 'age', type: 'integer'}
        ]
    }
});

var data = [ {name: 'Ed', age: 1 }, {name: 'Bib', age: 2}, {name: 'joe', age: 3} ];
data1 = []

Ext.define("DelugeApp.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.dataview.NestedList', 'Ext.TitleBar', 'Ext.data.proxy.JsonP', 'Ext.Panel'],
    alias: "widget.mainview",
   
    config: {
        fullscreen: true,
        tabBarPosition: 'bottom',

		refs: {
			store: '#theStore'
		},

        items: [
            {
                xtype: 'nestedlist',
                title: 'Torrents',
                iconCls: 'star',
                displayField: 'name',
                
                store: {
					id: 'theStore',
                   type: 'tree',
                    
					model: 'Torrent',
					data: data1
                },
                   
                detailCard: {
                    xtype: 'panel',
                    scrollable: true,
                    styleHtmlContent: true
                },
                
                listeners: {
                    itemtap: function(nestedList, list, index, target, record, e, eOpts) {
                        //this.getDetailCard().setHtml(record.get('content'));
                    },
                    
                    leafitemtap: function(nestedList, list, index, target, record, e, eOpts) {
                        //throw new Error("leafitemtap");
                    },
                    
                    load: function(nestedList, store, records, successful, operation, eOpts) {
                        //throw new Error("Loading");
                    },
                    
                    containertap: function(nestedList, list, e, eOpts) {
                        //throw new Error("containertap");
                    },
                    
                    selectionchange: function(nestedList, list, selections, eOpts) {
                        //throw new Error("selectionchange");
                    }
                }
            }
        ]
    },

	initialize: function(){
	//	localStore = this.getStore();
		client.core.get_session_state({
			success: function(result) {
				//console.log(result);
				Ext.each(result, function(torrentId) {
					console.log("Torrent id is: " + torrentId);
					client.core.get_torrent_status(torrentId, '', {
						success: function(result) {
							console.log("Status: " + result.toString());
							console.log("Name: " + result.name + " | " + result.total_done);
							data1.push(result);
							//localStore.data.add(result);
						}
					});
				});
			}
		});
		console.log('all done!')
	}
});