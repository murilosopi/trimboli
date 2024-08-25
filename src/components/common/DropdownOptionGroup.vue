<template>
  <li class="px-3 py-2 text-dark" @click.self="collapse = !collapse">
    <slot name="header"></slot>
    <transition name="fade">
      <div v-show="collapse">
        <slot name="content"></slot>
      </div>
    </transition>
  </li>
</template>

<script>
import "@/styles/transitions/fade.css";

export default {
  name: "DropdownOptionGroup",
  data() {
    return {
      collapse: false,
    };
  },
};
</script>
