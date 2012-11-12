Ext.define('DelugeApp.view.Login', {
    extend: 'Ext.Panel',
    requires: ['Ext.Panel', 'Ext.form.FieldSet', 'Ext.field.Text', 'DelugeApp.Auth', 'DelugeApp.Config'],
    alias: 'widget.login',
   
    config: {
        fullscreen: true
    },
    
    initialize: function(arguments) {
        this.callParent(arguments);
        
        var hostNameField = {
            xtype: 'textfield',
            label: 'Hostname',
            name: 'hostname'
        };

        self = this;
        
        var passwordField = {
            xtype: 'passwordfield',
            label: 'Password',
            name: 'password',
            listeners: this.passwordFieldListeners,
            scope: this
        };
        
        var fieldset = {
            xtype: 'fieldset',
            title: 'Enter password',
            items: [ hostNameField, passwordField ]
        };
        
        this.add([fieldset]);
    },
        
    passwordFieldListeners: {
        keyup: function(fld, e) {
            if (e.browserEvent.keyCode == 13) {
                e.stopEvent();
                self.fireEvent("loginCommand", fld.getValue(), self);
            }
        }
    }
});