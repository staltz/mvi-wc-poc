'use strict';
var Rx = require('rx');
var replicate = require('mvi-wc-poc/replicate');

var inputDecreaseClicks$ = new Rx.Subject();
var inputIncreaseClicks$ = new Rx.Subject();

function observe(View) {
  replicate(View.decreaseClicks$, inputDecreaseClicks$);
  replicate(View.increaseClicks$, inputIncreaseClicks$);
}

var deltaSelected$ = Rx.Observable
  .merge(
    inputDecreaseClicks$.map(function () { return -1; }),
    inputIncreaseClicks$.map(function () { return 1; })
  )
;

module.exports = {
  observe: observe,
  deltaSelected$: deltaSelected$
};
