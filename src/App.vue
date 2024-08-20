<template>
  <div id="app" class="text-light font-body bg-dark min-h-dvh">
    <NavigationHeader class="mx-auto mb-5" />
    <div class="container mx-auto px-4 max-w-5xl">
      <router-view />
    </div>
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
