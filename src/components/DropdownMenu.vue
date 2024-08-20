<template>
  <ul
    class="absolute top-12 drop-shadow-sm text-sm bg-light p-2 w-full text-center rounded-sm"
    :class="{ hidden: !isVisible }"
    @mouseleave="close"
  >
    <li
      v-for="(item, index) in items"
      :key="index"
      v-on="item.action ? { click: item.action } : null"
    >
      <router-link v-if="item.to" class="item" :to="item.to">
        {{ item.content }}
      </router-link>
      <span class="item" v-else>
        {{ item.content }}
      </span>
    </li>
  </ul>
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
.item {
  @apply px-3 py-2 inline-block text-dark;
}
</style>
