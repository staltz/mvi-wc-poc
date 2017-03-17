# mvi-wc-poc

A proof of concept for Web Components working controlled by a Virtual DOM architecture. It could be used in a similar way with [Cycle.js](https://cycle.js.org) or any other VDOM architecture such as [Vue](https://vuejs.org/) or [React](https://facebook.github.io/react/) etc.

## Polymer components

The `index.html` includes polymer, the platform (Polymer 1.0) and a Polymer `futu-process-arrow` custom element.

```
    <script src="bower_components/platform/platform.js"></script>
    <link rel="import" href="bower_components/polymer/polymer.html">
    <link rel="import" href="bower_components/futu-process-arrow/futu-process-arrow.html">
```

### View

The view uses the Polymer custom element:  `futu-process-arrow` with the `virtual-hyperscript` helper method `h`.

```js
      h('futu-process-arrow', {attributes: {'selected': modelData.selectedIndex}},
        modelData.steps.map(function (step) { return h('span', {}, step); })
      )
```

## Live demo

[demo](http://staltz.com/mvi-wc-poc/)
