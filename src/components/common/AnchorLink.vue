<template>
  <router-link v-if="router" :to="href" class="link">
    <slot></slot>
  </router-link>
  <a v-else :href="href" class="link">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "AnchorLink",
  props: {
    href: String,
    router: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.link {
  @apply text-primary-light font-bold hover:!underline;
}
</style>
