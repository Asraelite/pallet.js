function Pallet(canvas, options) {
	var self = this;

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

	context.webkitImageSmoothingEnabled = options.imageSmoothing || true;
	context.mozImageSmoothingEnabled = options.imageSmoothing || true;

	context.save();

	// Render single colour unstroked circle.
	this.circle = function(color, x, y, radius) {
		context.fillStyle = color;
		context.beginPath();
		context.arc(x, y, radius, 0, Math.PI * 2, false);
     	context.fill();
	};

	// Clear canvas.
	this.clear = function(x, y, w, h, color) {
		if (!h) {
			context.clearRect(0, 0, canvas.width, canvas.height);
		} else {
			context.clearRect(x, y, w, h);
		}
	};

	// Fill screen with color.
	this.fill = function(color) {
		context.fillStyle = color;
		context.fillRect(0, 0, canvas.width, canvas.height);
	}

	// Resize canvas to window.
	this.fillScreen = function() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		canvas.style.width = canvas.width + 'px';
		canvas.style.height = canvas.height + 'px';

		self.normalizeSize();
	};

	// Set canvas size to canvas element size.
	this.normalizeSize = function() {
		var style = window.getComputedStyle(canvas, null);

		canvas.width = +style.width.replace('px', '');
		canvas.height = +style.height.replace('px', '');

		context.save();
	};

	// Set default opacity.
	this.opacity = function(alpha) {
		alpha = alpha || 1;
		context.globalAlpha = alpha;
	};

	// Draw rectangular outline.
	this.outline = function(color, x, y, w, h, s) {
		context.strokeStyle = color;
		context.lineWidth = s || 1;
		context.strokeRect(x + 0.5, y + 0.5, w - 1, h - 1);
	};

	// Render single colour unstroked rectangle.
	this.rect = function(color, x, y, w, h) {
		context.fillStyle = color;
		context.fillRect(x, y, w, h);
	};

	// Restore canvas to original state.
	this.reset = function() {
		context.restore();
		context.save();
	};

	// Render rect with equal sides.
	this.square = function(color, x, y, l) {
		self.rect(color, x, y, l, l);
	};

	// Render text.
	this.text = function(string, x, y, color, font, size, align, baseline) {
		context.fillStyle = color || '#fff';
		if(+size == '' + size) size = size + 'px';
		context.font = size + ' ' + font;
		context.textAlign = align || 'left';
		context.textBaseline = baseline || 'top';
		context.fillText(string, x, y);
	};
}
