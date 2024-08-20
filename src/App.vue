<template>
  <div id="app" class="text-light">
    <NavigationHeader class="mx-auto" />
    <router-view />
  </div>
</template>
<script>
import NavigationHeader from "./components/NavigationHeader.vue";

export default {
  components: {
    NavigationHeader,
  },
};
</script>
<style>
body {
  @apply bg-dark;
}
</style>
