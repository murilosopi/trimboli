<template>
  <div class="relative">
    <button @click="toggleMenu">
      <i class="fa-solid fa-bars"></i>
    </button>
    <DropdownMenu ref="dropdown" alignment="end">
      <DropdownOption>
        <router-link to="/quem-somos">Quem Somos</router-link>
      </DropdownOption>

      <DropdownOptionGroup class="cursor-pointer">
        <template slot="header">
          Produtos e Serviços <i class="fa-solid fa-chevron-down"></i>
        </template>

        <template slot="content">
          <DropdownOption>
            <router-link to="/gestao-imobiliaria">
              Gestão Imobiliária
            </router-link>
          </DropdownOption>
          <DropdownOption>
            <router-link to="/securitizacao">Securitização</router-link>
          </DropdownOption>
        </template>
      </DropdownOptionGroup>

      <DropdownOption>
        <router-link to="/contato">Contato</router-link>
      </DropdownOption>
      <DropdownOption>
        <router-link to="/faq">Perguntas Frequentes</router-link>
      </DropdownOption>
    </DropdownMenu>
  </div>
</template>

<script>
import DropdownMenu from "../common/DropdownMenu.vue";
import DropdownOption from "../common/DropdownOption.vue";
import DropdownOptionGroup from "../common/DropdownOptionGroup.vue";

export default {
  name: "NavlistDropdown",
  components: { DropdownMenu, DropdownOption, DropdownOptionGroup },
  methods: {
    toggleMenu() {
      this.$refs.dropdown.toggle();
    },
  },
};
</script>

<style scoped>
.router-link-exact-active {
  @apply font-bold;
}
</style>
