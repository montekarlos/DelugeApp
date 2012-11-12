Ext.define("DelugeApp.controller.LoginController", {
    extend: "Ext.app.Controller",
    
    config: {
        refs: {
            loginView: 'login',
            torrentView: 'mainview'
        },
        control: {
            loginView: {
                loginCommand: "onLoginCommand"
            }
        }
    },
        
    onLoginSuccess: function(result, loginView, torrentView) {
        if (result) {
            console.log('login succeed');
                        
            Ext.Viewport.remove(loginView, false);
            Ext.Viewport.add(torrentView);
            
        } else {
            console.log('login failed!!!');
        }
    },

    // Commands
    onLoginCommand: function(password) {
        console.log("login - password: " + password);
        
        var loginView = this.getLoginView();
        var torrentView = Ext.create('DelugeApp.view.Main');
        var onLoginSuccess = this.onLoginSuccess;
        
        deluge.client.auth.login(password, {
            success: function(result) {
                onLoginSuccess(result, loginView, torrentView);
            }
        });
    },
    
    // Init functions
    
    launch: function() {
        this.callParent();
        console.log("launch");
    },
    
    init: function() {
        self = this;
        this.callParent();
        console.log("init");
    }
});