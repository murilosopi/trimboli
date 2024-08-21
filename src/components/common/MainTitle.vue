<template>
  <component
    :is="tag"
    class="text-primary font-bold font-display"
    :class="textSize"
  >
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
  computed: {
    textSize() {
      const sizes = {
        h1: "text-5xl",
        h2: "text-4xl",
        h3: "text-3xl",
        h4: "text-2xl",
        h5: "text-xl",
        h6: "text-lg",
      };
      return sizes[this.tag];
    },
  },
};
</script>
