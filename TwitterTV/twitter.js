var twitchChannels = ['freecodecamp','riotgames','lirik',"ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
function getChannels(){
	twitchChannels.forEach(function(channel){
		function getURL(type, name){
			return "https://wind-bow.glitch.me/twitch-api/"+type+"/"+name+"?callback=?";
		};
		$.getJSON(getURL('streams',channel),function(data){
			var game, status;
			if(data.stream === null){
				game = "Offline";
				status = "OFFLINE";
			} else if(data.stream === undefined){
				game = "Account does not Exist";
				status = "OFFLINE";
			} else{
				game = data.stream.game;
				status = "ONLINE";
			};
			$.getJSON(getURL('channels',channel), function(data){
				var logo = data.logo != null ? data.logo : "https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F";
				var name = data.display_name != null ? data.display_name : channel;
				var twitchURL = data.url !=null ? data.url : "";
				html = 
				'<div class="row">'+
					'<div class="col-md-3">'+
						'<img class="twitchLogo" src="'+logo+'">'+
					'</div>'+
					'<div class="col-md-3">'+
						'<a href="'+twitchURL+'" target="blank_">'
							+name+
						'</a>'+
					'</div>'+
					'<div class="col-md-3">'
						+status+
					'</div>'+
					'<div class="col-md-3">'
						+game+
					'</div>'
				'</div>';
				console.log(name);
				console.log(twitchURL);
				console.log(logo);

				status === "ONLINE" ? $('#twitchUsers').prepend(html) : $('#twitchUsers').append(html);
			});
		});
	});
	
}
$(document).ready(function(){
	getChannels();
});