# vue-curve-text

A Vue.js component that makes text align with the SVG curve.

## options

| name       | content         | defaults |
|:-----------|:----------------|:---------|
| `text`     | display text    |          |
| `:width`   | svg box width   | `200`    |
| `:height`  | svg box height  | `50`     |
| `:r`       | curve height    | `25`     |
| `textid`   | text anchor id  |          |
| `:debug`   | show curve line | `false`  |

## Usage

```html
<vue-curve-text text="Hello, World!"></vue-curve-text>
<vue-curve-text text="Hello, World!" :width="300" :height="100" :r="50" :debug="true" textid="my-curve-text"></vue-curve-text>
```

### Browser

```html
<script src="//cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="vue-curve-text.min.js"></script>
```

```js
Vue.use(VueCurveText);
new Vue({
  el: '#target-element-id'
});
```

### ES module

```js
import VueCurveText from 'vue-curve-text';
new Vue({
  el: '#target-element-id',
  components: { VueCurveText }
});
```

## Screenshot

![](https://raw.githubusercontent.com/inotom/vue-curve-text/master/vue-curve-text.png)

## License

MIT

## Author

iNo
