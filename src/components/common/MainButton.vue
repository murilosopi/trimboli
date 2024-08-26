<template>
  <button
    type="button"
    class="font-bold px-8 py-1 text-base rounded hover:brightness-90 active:brightness-75 transition-all"
    :class="variantStyles[variant]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MainButton",
  props: {
    variant: {
      type: String,
      default: "primary",
      validator(value) {
        return ["primary", "light"].includes(value);
      },
    },
  },
  data() {
    return {
      variantStyles: {
        primary: "bg-primary text-dark focus:ring focus:ring-primary-muted",
        light: "bg-light text-dark focus:ring focus:ring-gray",
      },
    };
  },
};
</script>
