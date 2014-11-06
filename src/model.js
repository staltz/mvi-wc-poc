'use strict';
var Rx = require('rx');
var replicate = require('mvi-wc-poc/replicate');

var intentDeltaSelected$ = new Rx.Subject();

function observe(Intent) {
  replicate(Intent.deltaSelected$, intentDeltaSelected$);
}

var data$ = Rx.Observable.just({selectedIndex: -1, steps: ['Hello', 'World', 'Red', 'Finish']})
  .merge(intentDeltaSelected$).scan(function (x, y) {
    if (typeof y === 'number') {
      x.selectedIndex += y;
      if (x.selectedIndex < -1) {
        x.selectedIndex = -1;
      }
      if (x.selectedIndex > x.steps.length - 1) {
        x.selectedIndex = x.steps.length - 1;
      }
    }
    return x;
  })
;

module.exports = {
  observe: observe,
  data$: data$
};
