# vanilla-tabs
Responsive tabs-to-accordion script without jQuery, written using pure JavaScript

<p>
<img src="https://img.shields.io/badge/dependencies-no-success.svg" alt="Dependencies" />
<img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License" />
</p>

## Author

Dmytro Kudleichuk

<a href="https://www.linkedin.com/in/dmitriy-kudleichuk/">LinkedIn</a>
<a href="https://github.com/DKudleichuk">GitHub</a>

## Online Demo

See <a href="https://dkudleichuk.github.io/vanilla-tabs-js/example.html">demo here</a> and <a href="https://github.com/DKudleichuk/vanilla-tabs-js">sources here</a>

## Getting Started

Load stylesheet and script file

```
<html>
<head>
	...
	<link rel="stylesheet" type="text/css" href="dist/vanilla-tabs.min.css">
</head>
<body>
	...
	<!--
		Before closing </body>
	-->
	<script src="dist/vanilla-tabs.min.js"></script>
	<script>
		document.addEventListener('DOMContentLoaded', () => {
			new VanillaTabs({
				'selector': '.tabs', // default is ".tabs"
				'type': 'horizontal', // can be horizontal / vertical / accordion
				'responsiveBreak': 840, // tabs become accordion on this device width
				'activeIndex' : 0 // active tab index (starts from 0 ). Can be -1 for accordions.
			});
		});
	</script>
</body>
</html>
```

## Markup 

```
<ul class="tabs">
	<li data-title="First tab">Put here any content for a first tab</li>
	<li data-title="Second tab">Put here any content for a second tab</li>
	<li data-title="Third tab">Put here any content for a third tab</li>
</ul>
```

## License

Feel free to use it on your projects without any restrictions
