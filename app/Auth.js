Ext.define('DelugeApp.Auth', {
	requires: ['DelugeApp.Config', 'Ext.ux.util.RpcClient'],
	
	loginToWebServer: function(password) {
	
		/*var client = new Ext.ux.util.RpcClient({
            url: config.hostname + config.json_path
        });*/

		//console.log('New client path: ' + config.hostname + config.json_path);
		
		deluge.client.auth.login(password, {
			success: function(result) {
				if (result) {

                    deluge.ui.mainView = new DelugeApp.view.Main();
                    
					// Do we really have to do this? So ugly :-(
					Ext.Viewport.remove(deluge.ui.loginView, false);
					Ext.Viewport.add(deluge.ui.mainView);
					/*
					client.core.get_status_keys({
						success: function(result) {
							console.log('get status_keys:' + result);
						}
					});*/
				
				/*
					client.core.get_session_state({
						success: function(result) {
							//console.log(result);
						
							Ext.each(result, function(torrentId) {
								console.log("Torrent id is: " + torrentId);
								client.core.get_torrent_status(torrentId, '', {
									success: function(result) {
										console.log("Status: " + result.toString());
										console.log("Name: " + result.name + " | " + result.total_done);
										console.log(result);
									}
								});
							});
			
						}
					});
			*/	
					deluge.client.core.get_torrents_status({
						success: function(result) {
							console.log(result);
							/*if (result) {
								console.log('get_torrents_status ok');
							} else {
								console.log('get_torrents_status failure');
							}*/
						}
					});			
				} else {
					console.log('login failed!!!');
				}
			},
			scope: true
		});
	}
});