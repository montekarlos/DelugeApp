Ext.define('DelugeApp.view.Login', {
    extend: 'Ext.Panel',
    requires: ['Ext.Panel', 'Ext.form.FieldSet', 'Ext.field.Text'],
    alias: 'widget.login',
    
    config: {
        fullscreen: true,
        items: [
            {
                xtype: 'fieldset',
                title: 'Enter password',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Password',
                        listeners: {
                            keyup: function(fld, e) {
                                if (e.browserEvent.keyCode == 13) {
                                    e.stopEvent();
                                    console.log('Pressed enter in password field - Value is: ' + fld.getValue());
                                    
                                    client.auth.login(String(fld.getValue()), {
                                                success: function(result) {
                                                    if (result) {
                                                        console.log('logged in ok!!!');
                                                        
                                                        /*
                                                        client.core.get_status_keys({
                                                            success: function(result) {
                                                                console.log('get status_keys:' + result);
                                                            }
                                                        });*/
                                                        
                                                        client.core.get_session_state({
                                                            success: function(result) {
                                                                //console.log(result);
                                                                
                                                                Ext.each(result, function(torrentId) {
                                                                    console.log("Torrent id is: " + torrentId);
                                                                    client.core.get_torrent_status(torrentId, '', {
                                                                        success: function(result) {
                                                                            console.log("Status: " + result.toString());
                                                                            console.log("Name: " + result.name + " | " + result.total_done);
                                                                        }
                                                                    });
                                                                });
                                                                /*if (result) {
                                                                    console.log('get_torrents_status ok');
                                                                } else {
                                                                    console.log('get_torrents_status failure');
                                                                }*/
                                                            }
                                                        });
                                                        
                                                        client.core.get_torrents_status({
                                                            success: function(result) {
                                                                console.log(result);
                                                                /*if (result) {
                                                                    console.log('get_torrents_status ok');
                                                                } else {
                                                                    console.log('get_torrents_status failure');
                                                                }*/
                                                            }
                                                        });
                                                        
                                                        
                                                        //passwordField.setRawValue('');
                                                    } else {
                                                        console.log('login failed!!!');
                                                    }
                                                },
                                                scope: true
                                            });
                                }
                            }
                        }
                    }
                ]
            }
        ]
    
    }

});