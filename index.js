/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-memory-stats',
  included: function included(app) {
    this._super.included(app);

    app.import('vendor/memory-stats.js');
    app.import('vendor/stats.js');
  }
};
