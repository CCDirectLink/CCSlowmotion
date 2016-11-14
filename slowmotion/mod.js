document.body.addEventListener('modsLoaded', function () {
	var keydown = false;
	var slowmoActive = false;
	ig.input.bind('X'.charCodeAt(0), "slowmotion");
	simplify.registerUpdate(function(){
		var kd = ig.input.state("slowmotion");
		if(!keydown && kd){
			if(slowmoActive){
				new cc.ig.events.CLEAR_SLOW_MOTION({name: "userTriggered"}).start();
			}else{
				new cc.ig.events.ADD_SLOW_MOTION({name: "userTriggered", factor: 0.5, time: 0}).start();
			}
			slowmoActive = !slowmoActive;
		}
		
		if(keydown != kd)
			keydown = kd;
	});
});