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
panel.on('style', (style) => {
  // do stuff
  
});

// tell parent to render panel
panel.render();

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
render | | informs the parent the panel should be rendered | | false

### Events
Name | Description
style | fired when the parent's style changes | Payload matches IStyle.ts 

