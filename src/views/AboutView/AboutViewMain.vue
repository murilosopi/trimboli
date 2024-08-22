<template>
  <section class="home">
    <MainTitle :tag="'h1'" class="text-center">
      <i class="fas fa-users"></i>
      Quem somos
    </MainTitle>

    <AboutArticles />

    <hr class="w-2/3 mx-auto my-12 border-gray" />

    <AboutCards />
  </section>
</template>

<script>
import MainTitle from "@/components/common/MainTitle.vue";
import AboutArticles from "./fragments/AboutArticles.vue";
import AboutCards from "./fragments/AboutCards.vue";

export default {
  name: "AboutViewMain",
  components: { MainTitle, AboutArticles, AboutCards },
};
</script>
