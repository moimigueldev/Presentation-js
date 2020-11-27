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

To be able to run Presentation-js you will need to provide a container with an attribute of _presentation-js_
The container can only have children of divs with a background-image/text provided and height
The divs will take the entire width of it's containers
You will need to provide a _data-slide_ attribute the the children of the container. _example can be found on the index.html page_
to initialize the container. You will need to provide `presentation.start()` function

#### presentation.start()

## Configuration

This function takes in one optional parameter. The parameter is the object to which you can provide presentation-js with configurations to the carousel.

```
presentation.start('presentation', {
  timer: 6000,
  arrows: true,
  autoSlide: true,
  dots: false,
  dotsSize: '13px',
  activeDotColor: 'white',
  inactiveDotColor: 'gray',
  arrowSize: '25px',
  arrowColor: 'beige'
  })
```

these are the current default parameters that presentation-js will run off of unless changed by the user itself.
_Keep in mind that when changing parameter, the value types need to be the same as the defaults_ or else you will see a type error from presentation-js

# Running the applcation

To run the application you will need to run

```
 npm start
```

this will watch for any changes to files and run the babel and rollup

you will need to open the index.html file via folder explorer to view the application
