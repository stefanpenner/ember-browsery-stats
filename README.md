# ember-browsery-stats

Easiest way to get [paulirish's memory-stats.js](https://github.com/paulirish/memory-stats.js) memory stats and [mrdoobs stats.js](https://github.com/mrdoob/stats.js/)
running in an ember-app. Please refer to the [memory-stats.js repo](https://github.com/paulirish/memory-stats.js) or [stats.js repo](https://github.com/mrdoob/stats.js/) for further documentation.

![image](http://i.imgur.com/eUCFcAH.gif)

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

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
