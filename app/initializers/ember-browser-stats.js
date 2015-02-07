import MemoryStats from 'paulirish-memory-stats';
import Stats from 'mrdoob-stats';

export default {
  name: 'ember-browser-stats',
  initialize: function() {
    var mem = new MemoryStats();
    var stats = new Stats();

    stats.domElement.style.position = 'fixed';
    stats.domElement.style.right  = '85px';
    stats.domElement.style.bottom = '0px';
    stats.domElement.style['z-index'] = '9999';

    document.body.appendChild(stats.domElement);

    mem.domElement.style.position = 'fixed';
    mem.domElement.style.right    = '0px';
    mem.domElement.style.bottom   = '0px';
    mem.domElement.style['z-index'] = '9999';

    document.body.appendChild(mem.domElement);

    if (typeof requestAnimationFrame === 'function') {
      stats.begin();
      requestAnimationFrame(function rAFloop(){
        stats.end();
        mem.update();
        stats.begin();
        requestAnimationFrame(rAFloop);
      });
    }
  }
}
