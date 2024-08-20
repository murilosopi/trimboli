<template>
  <component :is="tag" class="text-primary font-bold text-5xl font-display">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: "MainTitle",
  props: {
    tag: {
      type: String,
      default: "h1",
    },
  },
};
</script>
