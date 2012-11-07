Ext.define('DelugeApp.view.Login', {
    extend: 'Ext.Panel',
    requires: ['Ext.Panel', 'Ext.form.FieldSet', 'Ext.field.Text', 'DelugeApp.Auth', 'DelugeApp.Config'],
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
						label: 'Hostname',
						name: 'hostname',
						value: 'config.hostname'
					},
                    {
                        xtype: 'passwordfield',
                        label: 'Password',
						name:  'password',
                        listeners: {
                            keyup: function(fld, e) {
                                if (e.browserEvent.keyCode == 13) {
                                    e.stopEvent();
                                    console.log('Pressed enter in password field - Value is: ' + fld.getValue());
                                    
                                    var auth = new DelugeApp.Auth();
									auth.loginToWebServer(fld.getValue());
                                }
                            }
                        }
                    }
                ]
            }
        ]
    
    }

});