# ember-browsery-stats

Easiest way to get [paulirish's memory-stats.js](https://github.com/paulirish/memory-stats.js) memory stats and [mrdoobs stats.js](https://github.com/mrdoob/stats.js/)
running in an ember-app. Please refer to the [memory-stats.js repo](https://github.com/paulirish/memory-stats.js) or [stats.js repo](https://github.com/mrdoob/stats.js/) for further documentation.

![image](http://i.imgur.com/eUCFcAH.gif)
![image](https://camo.githubusercontent.com/a5c4f1312c44b9ebc7efa669067a01d0eb4e11b1/687474703a2f2f6d72646f6f622e6769746875622e636f6d2f73746174732e6a732f6173736574732f73746174735f6a735f6670732e706e67)

## Installation

* `ember install:addon ember-browsery-stats`
* To conditionally enable this addon only while in development:

```javascript 
// Brocfile.js
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  browseryStats: EmberApp.env() === 'development'
});

module.exports = app;
```

## Running
* Start Chrome [with](http://www.chromium.org/developers/how-tos/run-chromium-with-flags) `--enable-precise-memory-info`
    - Otherwise the results from performance.memory are bucketed and less useful.
* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
