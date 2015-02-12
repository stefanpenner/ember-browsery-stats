/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-memory-stats',
  
  isEnabled: function () {
    var options = this.app.options.browseryStats;
    return typeof options === 'undefined' || !!options;
  },

  included: function included(app) {
    this._super.included(app);
    
    if (this.isEnabled()) {
      app.import('vendor/memory-stats.js');
      app.import('vendor/stats.js');
    }
  }
};
