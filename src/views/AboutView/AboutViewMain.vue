<template>
  <section class="home">
    <MainTitle :tag="'h1'" class="text-center">
      <i class="fas fa-users"></i>
      Quem somos
    </MainTitle>

    <AboutArticles />

    <AboutCards />
  </section>
</template>

<script>
import MainTitle from "@/components/common/MainTitle.vue";
import AboutArticles from "./fragments/AboutArticles.vue";
import AboutCards from "./fragments/AboutCards.vue";

export default {
  name: "AboutView",
  components: { MainTitle, AboutArticles, AboutCards },
};
</script>
