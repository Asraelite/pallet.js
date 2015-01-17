# pallet.js
Javascript canvas abstraction layer for drawing shapes and simple objects.


Usage
-----

Clone pallet.js with git:

```bash
git clone git://github.com/Asraelite/pallet.js.git
```

Include it in your project:

```html
<script src="pallet.js"></script>
```

Create a new __Pallet__ object, passing the id of the canvas element you want to use:
```javascript
var pallet = new Pallet('#mycanvas');
```

You can also pass a canvas element directly, or exclude the "#" in the id. If you do not pass anything, Pallet.js will look for the first canvas element in the document and use that.

You may then call the functions of the pallet object to draw different things to the canvas.


To draw a rectangle:

```javascript
pallet.rect(color, x, y, width, height);

// Example:
pallet.rect('#f00', 50, 90, 20, 15);
```

To draw a circle:
```javascript
pallet.circle(color, x, y, radius);

// Example:
pallet.circle('#aa8', 150, 150, 50);
```

To clear the canvas:

```javascript
pallet.clear();
```

To clear a section of the canvas:

```javascript
pallet.clear(x, y, width, height);

// Example:
pallet.clear(200, 200, 500, 100);
```

