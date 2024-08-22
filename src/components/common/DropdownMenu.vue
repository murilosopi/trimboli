<template>
  <transition name="fade">
    <ul
      class="absolute top-12 drop-shadow-sm text-sm bg-light p-2 w-full text-center rounded-sm"
      v-show="isVisible"
      @mouseleave="close"
    >
      <slot></slot>
    </ul>
  </transition>
</template>

<script>
export default {
  name: "DropdownMenu",
  props: {
    items: Array,
  },
  data() {
    return {
      isVisible: false,
      timeCounterClose: null,
    };
  },
  methods: {
    open() {
      this.isVisible = true;
      clearTimeout(this.timeCounterClose);
    },
    close(timeSeconds = 0) {
      this.timeCounterClose = setTimeout(() => {
        this.isVisible = false;
      }, timeSeconds * 1000);
    },
    toggle() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
