# Maestro Panel SDK
Version: 1.00.0

Initializing

```ecmascript 6
const MaestroPanelSDK = require('MaestroPanelSDK');
const panel = new MaestroPanelSDK();

const run = async () => {
  panel.init();
}

// get style from parent
panel.getStyle().then((style) => {
  // do stuff
})

// parent is ready to render page
panel.on('parent-ready', () => {
  // do stuff, then tell parent to render
  panel.render();
})

// initialize the sdk
panel.init();

// destroy when finished
panel.destroy();

```

### Methods
Name | Params | Description | Payload | Async
--- | --- | --- | --- | ---
init | | registers the iframe with the parent and inits listener | | false 
destroy | | destroys listeners and informs parent this iframe is destroyed | | false 
getStyle | | returns a style object of the parent site | style object | true

