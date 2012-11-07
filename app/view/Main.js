Ext.define("DelugeApp.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.dataview.NestedList', 'Ext.TitleBar', 'Ext.data.proxy.JsonP', 'Ext.Panel'],
    alias: "widget.mainview",
    
    config: {
        fullscreen: true,
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Home',
                iconCls: 'home',
                cls: 'home',
                html: [
                    '<img width="65%" src="http://staging.sencha.com/img/sencha.png" />',
                    '<h1>Welcome to Sencha Touch</h1>',
                    "<p>You're creating the Getting Started app. This demonstrates how ",
                    "to use tabs, lists and forms to create a simple app</p>",
                    '<h2>Sencha Touch 2</h2>'
                ].join("")
            },
            {
                xtype: 'nestedlist',
                title: 'Blog',
                iconCls: 'star',
                displayField: 'title',
                
                store: {
                    type: 'tree',
                    
                    fields: [
                        'title', 'link', 'author', 'contentSnippet', 'content',
                        {name: 'leaf', defaultValue: true}
                    ],
                        
                    root: {
                        leaf: false
                    },
                    
                    proxy: {                            
                        type: 'jsonp',
                        url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://rss.slashdot.org/Slashdot/slashdot',
                        reader: {
                            type: 'json',
                            rootProperty: 'responseData.feed.entries'
                        }
                    }
                },
                   
                detailCard: {
                    xtype: 'panel',
                    scrollable: true,
                    styleHtmlContent: true
                },
                
                listeners: {
                    itemtap: function(nestedList, list, index, target, record, e, eOpts) {
                        this.getDetailCard().setHtml(record.get('content'));
                    },
                    
                    leafitemtap: function(nestedList, list, index, target, record, e, eOpts) {
                        //throw new Error("leafitemtap");
                    },
                    
                    load: function(nestedList, store, records, successful, operation, eOpts) {
                        //throw new Error("Loading");
                    },
                    
                    containertap: function(nestedList, list, e, eOpts) {
                        throw new Error("containertap");
                    },
                    
                    selectionchange: function(nestedList, list, selections, eOpts) {
                        throw new Error("selectionchange");
                    }
                }
            },
            //this is the new item
            {
                title: 'Contact',
                iconCls: 'user',
                xtype: 'formpanel',
                url: 'contact.php',
                layout: 'vbox',

                items: [
                    {
                        xtype: 'fieldset',
                        title: 'Contact Us',
                        instructions: '(email address is optional)',
                        items: [
                            {
                                xtype: 'textfield',
                                label: 'Name'
                            },
                            {
                                xtype: 'emailfield',
                                label: 'Email'
                            },
                            {
                                xtype: 'textareafield',
                                label: 'Message'
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        text: 'Send',
                        ui: 'confirm',
                        handler: function() {
                            this.up('formpanel').submit();
                        }
                    }
                ]
            }
        ]
    }
});