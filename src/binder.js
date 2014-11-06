'use strict';
module.exports = function (model, view, intent) {
  if (view) { view.observe(model); }
  if (intent) { intent.observe(view); }
  if (model) { model.observe(intent); }
};
