<script setup lang="ts">
import CurveText from './components/CurveText.vue';
</script>

<template>
  <div>
    <h1>@inotom/vue-curve-text demo</h1>
    <div class="curve-text">
      <curve-text>Hello, World!</curve-text>
      <curve-text
        color="#f00">Hello, World!</curve-text>
      <curve-text>こんにちは、世界！</curve-text>
    </div>
    <div class="curve-text--outline curve-text--large">
      <curve-text
        :width="300"
        :height="100"
        :r="50"
        textid="my-curve-text"
        color="darkorange"
        :debug="true">Hello, World!</curve-text>
    </div>
    <div class="curve-text--outline">
      <curve-text
        offset="55px"
        :debug="true">Hello, World!</curve-text>
    </div>
  </div>
</template>

<style lang="scss">
.curve-text {
  &--large {
    font-size: 30px;
    font-weight: bold;
  }

  &--outline {
    svg {
      border: 1px dashed #f00;
    }
  }
}
</style>
