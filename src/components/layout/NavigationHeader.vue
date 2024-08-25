<template>
  <nav
    class="flex justify-between p-8 font-display xl:text-xl lg:text-lg items-center bg-gradient-to-b from-[#ffffff0d] via-[#9999990d]"
  >
    <figure class="lg:w-auto w-20">
      <img src="@/assets/img/dark-trimboli-logo.svg" alt="Trimboli Logo" />
    </figure>

    <NavlistDropdown class="block md:hidden" />

    <NavlistDefault class="hidden md:flex" />
  </nav>
</template>

<script>
import NavlistDefault from "./NavlistDefault.vue";
import NavlistDropdown from "./NavlistDropdown.vue";

export default {
  name: "NavigationHeader",
  components: { NavlistDefault, NavlistDropdown },
};
</script>
