<template>
  <button
    :class="`w-8 h-8 p-1 bg-black rounded-full ${
      disabled
        ? 'cursor-not-allowed bg-opacity-40 text-gray-400'
        : 'text-gray-50 transition-colors hover:bg-white hover:bg-opacity-20'
    }`"
    :disabled="disabled"
    @click="onClick"
  >
    <slot>Button</slot>
  </button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'TheTopBarNavigationButton',
    props: {
      onClick: { type: Function, default: null },
      disabled: { type: Boolean, deafault: false },
    },
  });
</script>
