<template>
  <div class="relative">
    <MainButton class="rounded-none rounded-l mr-[1px]">
      <slot name="button"></slot>
    </MainButton>
    <MainButton
      class="rounded-none rounded-r !px-3"
      @click.native="toggleDropdown"
    >
      <i class="fa-solid fa-chevron-down text-xs"></i>
    </MainButton>
    <DropdownMenu ref="dropdown" class="mt-1">
      <slot name="menu"></slot>
    </DropdownMenu>
  </div>
</template>

<script>
import DropdownMenu from "./DropdownMenu.vue";
import MainButton from "./MainButton.vue";

export default {
  name: "DropdownButton",
  components: { MainButton, DropdownMenu },
  methods: {
    toggleDropdown() {
      this.$refs.dropdown.toggle();
    },
  },
};
</script>
