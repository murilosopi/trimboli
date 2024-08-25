<template>
  <ul class="flex gap-5">
    <li class="item">
      <router-link to="/quem-somos">Quem Somos</router-link>
    </li>
    <li
      class="item relative cursor-pointer"
      @click="openDropdownMenu"
      @mouseenter="openDropdownMenu"
      @mouseleave="closeDropdownMenu"
    >
      Produtos e Serviços <i class="fa-solid fa-chevron-down"></i>

      <DropdownMenu
        ref="dropdownMenu"
        @mouseenter.native="openDropdownMenu"
        class="!w-full mt-1"
      >
        <DropdownOption
          v-for="{ to, content } in servicesAndProdutcts"
          :key="to"
        >
          <router-link :to="to"> {{ content }}</router-link>
        </DropdownOption>
      </DropdownMenu>
    </li>
    <li class="item">
      <router-link to="/contato">Contato</router-link>
    </li>
    <li class="item">
      <router-link to="/faq">Perguntas Frequentes</router-link>
    </li>
  </ul>
</template>

<script>
import DropdownMenu from "../common/DropdownMenu.vue";
import DropdownOption from "../common/DropdownOption.vue";

export default {
  name: "NavlistDefault",
  components: { DropdownMenu, DropdownOption },
  data() {
    return {
      servicesAndProdutcts: [
        {
          content: "Securitização",
          to: "/securitizacao",
        },
        {
          content: "Gestão Imobiliária",
          to: "/gestao-imobiliaria",
        },
      ],
      closed: true,
    };
  },
  methods: {
    openDropdownMenu() {
      this.$refs.dropdownMenu.open();
    },
    closeDropdownMenu() {
      this.$refs.dropdownMenu.close(0.5);
    },
  },
};
</script>

<style scoped>
.item {
  @apply border-b border-light hover:border-primary-muted hover:text-primary-muted pb-2 transition-all;
}

.item:has(.router-link-exact-active) {
  @apply text-primary-light border-primary-light;
}
</style>
