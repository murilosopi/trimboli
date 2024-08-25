<template>
  <transition name="fade">
    <ul
      class="absolute top-full w-max rounded-sm drop-shadow-sm text-sm bg-light p-2 text-center transition-all"
      :class="{
        'left-0': alignment == 'start',
        'right-0': alignment == 'end',
        'right-2/4 translate-x-1/2': alignment == 'center',
      }"
      v-show="isVisible"
      @mouseleave="close"
    >
      <slot></slot>
    </ul>
  </transition>
</template>

<script>
import "@/styles/transitions/fade.css";

export default {
  name: "DropdownMenu",
  props: {
    items: Array,
    alignment: {
      type: String,
      default: "end",
      validator(value) {
        return ["end", "start", "center"].includes(value);
      },
    },
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
