$(document).on('keydown',function(e) {
	if(e.which == 37) { // LEFT ARROW Key
		if(player[0].position[0] > LEFT){
	        player[0].position[0] -= STRIDE;
	        police[0].position[0] -= STRIDE;
	        dog[0].position[0] -= STRIDE;
		}
	}
	if(e.which == 39) { // RIGHT ARROW Key
		if(player[0].position[0] < RIGHT){
	        player[0].position[0] += STRIDE;
		police[0].position[0] += STRIDE;
	        dog[0].position[0] += STRIDE;		
		}
	}
	if(e.which == 66) { // B Key
		if(grayscale){
			grayscale = false;
		} else {
			grayscale = true;
		}
	}
	if(e.which == 86) { // V Key
		if(blink){
			blink = false;
		} else {
			blink = true;
		}
	}
	if(e.which == 32 && !in_sky) { // Space Key
		if(player[0].position[1] == player_y_coord){
	        player[0].velocity[1] = JUMP_VELOCITY;
		}
		// console.log(player[0].velocity)
	}
});
