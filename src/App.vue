<template>
  <div id="app" class="text-light font-body bg-dark min-h-dvh">
    <NavigationHeader class="mx-auto" />
    <router-view />
  </div>
</template>
<script>
import NavigationHeader from "./components/layout/NavigationHeader.vue";

export default {
  components: {
    NavigationHeader,
  },
};
</script>
