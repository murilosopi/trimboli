<template>
  <nav
    class="flex justify-between p-8 font-display text-xl items-center bg-gradient-to-b from-[#ffffff0d] via-[#9999990d]"
  >
    <figure>
      <img src="@/assets/img/dark-trimboli-logo.svg" alt="Trimboli Logo" />
    </figure>
    <ul class="flex gap-10 items-end">
      <li class="item">
        <router-link to="/quem-somos">Quem Somos</router-link>
      </li>
      <li class="item">
        Produtos e Serviços
        <ul>
          <li>
            <router-link to="/gestao-imobiliaria">
              Gestão Imobiliária
            </router-link>
          </li>
          <li>
            <router-link to="/securitizacao">Securitização</router-link>
          </li>
        </ul>
      </li>
      <li class="item">
        <router-link to="/contato">Contato</router-link>
      </li>
      <li class="item">
        <router-link to="/faq">Perguntas Frequentes</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavigationHeader",
};
</script>

<style scoped>
.item {
  @apply border-b border-light hover:border-primary-muted hover:text-primary-muted pb-2 transition-all duration-150;
}

.item:has(.router-link-exact-active) {
  @apply text-primary-light border-primary-light;
}
</style>
