'use strict';
var Rx = require('rx');
var h = require('virtual-hyperscript');
var replicate = require('mvi-wc-poc/replicate');

var modelData$ = new Rx.BehaviorSubject(null);
var decreaseClicks$ = new Rx.Subject();
var increaseClicks$ = new Rx.Subject();

function observe(Model) {
  replicate(Model.data$, modelData$);
}

var vtree$ = modelData$
  .filter(function (x) { return !!x; })
  .map(function (modelData) {
    return h('div', {}, [
      h('button', {'ev-click': function (ev) { decreaseClicks$.onNext(ev); }}, 'Decrease'),
      h('button', {'ev-click': function (ev) { increaseClicks$.onNext(ev); }}, 'Increase'),
      h('br'),
      h('futu-process-arrow', {attributes: {'selected': modelData.selectedIndex}},
        modelData.steps.map(function (step) { return h('span', {}, step); })
      )
    ]);
  });

module.exports = {
  observe: observe,
  vtree$: vtree$,
  decreaseClicks$: decreaseClicks$,
  increaseClicks$: increaseClicks$
};
