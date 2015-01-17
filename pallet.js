function Pallet(canvas, options) {
	options = options || {};
	
	if(typeof canvas == 'string') {
		canvas = document.getElementById(canvas.replace('#', ''));
	} else if(!canvas) {
		canvas = document.getElementsByTagName('canvas')[0];
		if(!canvas) return false;
	} else if(canvas.tagName != 'CANVAS') {
		return false;
	}
	
	var context = canvas.getContext('2d');
	
	this.canvas = canvas;
	this.context = context;
	
	// Render single colour unstroked circle.
	this.circle = function(color, x, y, radius) {
		context.fillStyle = color;
		context.beginPath();
		context.arc(x, y, radius, 0, Math.PI * 2, false);
     	context.fill();
	}
	
	// Clear canvas.
	this.clear = function(x, y, w, h) {
		if(!h) {
			context.clearRect(0, 0, canvas.width, canvas.height);
		} else {
			context.clearRect(x, y, w, h);
		}
	}
	
	// Set canvas size to canvas element size.
	this.normalizeSize = function() {
		var style = window.getComputedStyle(canvas, null);
		
		canvas.width = +style.width.replace('px', '');
		canvas.height = +style.height.replace('px', '');
	}
	
	// Render single colour unstroked rectangle.
	this.rect = function(color, x, y, w, h) {
		context.fillStyle = color;
		context.fillRect(x, y, w, h);
	}
}

