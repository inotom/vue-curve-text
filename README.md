# vue-curve-text

A Vue.js component that makes text align with the SVG curve.


## Demo

[Demo](http://sandbox.serendip.ws/vue-curve-text.html)


## Screenshot

![](https://raw.githubusercontent.com/inotom/vue-curve-text/v2.0.0/vue-curve-text.png)


## Install

### Browser

```html
<script src="vue.js"></script>
<script src="vue-curve-text.min.js"></script>
```

### npm

```
npm install --save @inotom/vue-curve-text
```


## Usage

### Browser

```html
<div id="app">
  <curve-text>Hello, World!</curve-text>
  <curve-text
    :width="300"
    :height="100"
    :r="50"
    offset="30%"
    textid="my-curve-text"
    color="#f00"
    :debug="true">Hello, World!</curve-text>
</div>

<script src="vue.js"></script>
<script src="vue-curve-text.min.js"></script>
<script>
Vue.use(CurveText);
new Vue({
  el: '#app'
});
</script>
```


### SCF

```vue
<template>
  <div>
    <curve-text>Hello, World!</curve-text>
    <curve-text
      :width="300"
      :height="100"
      :r="50"
      offset="30%"
      textid="my-curve-text"
      color="#f00"
      :debug="true">Hello, World!</curve-text>
  </div>
</template>

<script>
import CurveText from '@inotom/vue-curve-text';

export default {
  components: {
    CurveText
  }
}
</script>
```


## Props

| Props      | Type     | Default          | Description           |
|------------|----------|------------------|-----------------------|
| `:width`   | Number   | `200`            | Svg box width         |
| `:height`  | Number   | `50`             | Svg box height        |
| `:r`       | Number   | `25`             | Curve height          |
| `offset`   | String   | `"50%"`          | Text start position   |
| `textid`   | String   | `""`             | Text anchor id        |
| `color`    | String   | `"currentColor"` | Text color            |
| `:debug`   | Boolean  | `false`          | Show curve line       |


## License

MIT


## Author

inotom
