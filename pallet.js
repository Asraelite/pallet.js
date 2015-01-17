function Pallet(canvas, options) {
	options = options || {};
	
	if(typeof canvas == 'string') {
		canvas = document.getElementById(canvas.replace('#', ''));
	} else if(!canvas) {
		canvas = document.getElementsByTagName('canvas')[0];
		if(!canvas); return false;
	} else if(canvas.tagName != 'CANVAS') {
		return false;
	}
	
	var context = canvas.getContext('2d');
}

