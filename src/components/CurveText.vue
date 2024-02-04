<script setup lang="ts">
import { computed, getCurrentInstance, onMounted, useSlots } from 'vue';

interface Props {
  width?: number;
  height?: number;
  r?: number;
  offset?: string;
  textid?: string;
  color?: string;
  debug?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  width: 200,
  height: 50,
  r: 25,
  offset: '50%',
  textid: '',
  color: 'currentColor',
  debug: false,
});

const slots = useSlots();

const instance = getCurrentInstance();

const stroke = computed(() => props.debug ? 'gray' : 'none');

const textId = computed(() => props.textid === '' ? `vue-curve-text-${instance?.uid}` : props.textid);

const xlink = computed(() => `#${textId.value}`);

const vbox = computed(() => [0, 0, props.width, props.height].join(' '));

const d = computed(() => `M 0,${props.height} Q ${props.width / 2},${props.height - (props.r * 2)} ${props.width},${props.height}`);

onMounted(() => {
  const defaultSlots = slots?.default;
  if (!defaultSlots) {
    console.error('Slot content is not defined');
    return;
  }
  if (defaultSlots().length > 1) {
    console.error('Slot content must be a textNode', defaultSlots());
    return;
  }
  if (defaultSlots()[0].type.toString() !== 'Symbol(v-txt)') {
    console.error('Slot content must be a textNode', defaultSlots()[0]);
    return;
  }
});
</script>

<template>
  <svg
    :viewBox="vbox"
    :width="width"
    :height="height"
  >
    <g>
      <path
        :stroke="stroke"
        :d="d"
        :id="textId"
        fill="none"
      />
      <text>
        <textPath
          :xlink:href="xlink"
          :fill="color"
          :startOffset="offset"
          text-anchor="middle"
        >
          <slot/>
        </textPath>
      </text>
    </g>
  </svg>
</template>
