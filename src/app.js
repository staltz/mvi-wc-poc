'use strict';
var binder = require('mvi-wc-poc/binder');
var renderer = require('mvi-wc-poc/renderer');
var Model = require('mvi-wc-poc/model');
var View = require('mvi-wc-poc/view');
var Intent = require('mvi-wc-poc/intent');

window.onload = function () {
  binder(Model, View, Intent);
  renderer.init();
};
