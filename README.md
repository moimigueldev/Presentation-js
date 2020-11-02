# Presentation-js

Carousel without the use of JQuery

==================================================================

### Installation

1. Clone the repo
2. run npm install to install dependecies

### requirements

please provide the style and script tag to your application

```
    <link rel="stylesheet" href="build/styles/main.css">
```

```
    <script src="build/bundle.js"></script>
```

### Usage

To be able to run Presentation-js you will need to provide a container with an id of _presentation_
The container can only have children of divs with a background-image provided and height
The divs will take the entire width of it's containers
You will need to provide a _data-slide_ attribute the the children of the container. _example can be found on the index.html page_
to initialize the container. You will need to provide `presentation.start()` function

#### presentation.start()

This function takes in two parameters. The first will be the id of the container. and the second will be the options _the options parameter is optional_

```
presentation.start('presentation', { arrows: true, timer: 3000, autoSlide: true })

```
