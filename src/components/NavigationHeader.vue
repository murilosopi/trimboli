<template>
  <nav class="flex justify-between p-8">
    <figure>
      <img src="@/assets/img/dark-trimboli-logo.svg" alt="Trimboli Logo" />
    </figure>
    <ul class="flex gap-10">
      <li>
        <router-link to="/quem-somos">Quem Somos</router-link>
      </li>
      <li>
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
      <li>
        <router-link to="/contato">Contato</router-link>
      </li>
      <li>
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
nav a.router-link-exact-active {
  @apply text-primary-light;
}
</style>
