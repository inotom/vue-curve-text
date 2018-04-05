<template>
  <svg v-bind:viewBox="vbox" v-bind:width="width" v-bind:height="height">
    <path v-bind:stroke="stroke" fill="none" v-bind:d="d" v-bind:id="text_id"></path>
    <text>
      <textPath startOffset="50%" text-anchor="middle" v-bind:xlink:href="xlink">
        {{ text }}
      </textPath>
    </text>
  </svg>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        required: true
      },
      width: {
        type: Number,
        default: 200
      },
      height: {
        type: Number,
        default: 50
      },
      r: {
        type: Number,
        default: 25
      },
      textid: {
        type: String,
        default: ''
      },
      debug: {
        type: Boolean,
        default: false
      }
    },
    data() {
      const props = Object.create(null);
      props['stroke'] = this.debug ? 'gray' : 'none';
      props['text_id'] = this.textid === '' ? `vue-curve-text-${this._uid}` : this.textid;
      props['xlink'] = `#${props.text_id}`;
      props['vbox'] = [0, 0, this.width, this.height].join(' ');
      props['d'] = `M 0,${this.height} Q ${this.width / 2},${this.height - (this.r * 2)} ${this.width},${this.height}`;
      return props;
    }
  }
</script>
