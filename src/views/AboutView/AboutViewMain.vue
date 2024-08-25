<template>
  <section class="home">
    <ContainerView>
      <MainTitle :tag="'h1'" class="text-center mb-12">
        <i class="fas fa-users"></i>
        Quem somos
      </MainTitle>

      <AboutArticles />

      <hr class="w-2/3 mx-auto my-12 border-gray" />

      <AboutCards />
    </ContainerView>
  </section>
</template>

<script>
import ContainerView from "@/components/layout/ContainerView.vue";
import MainTitle from "@/components/common/MainTitle.vue";
import AboutArticles from "./fragments/AboutArticles.vue";
import AboutCards from "./fragments/AboutCards.vue";

export default {
  name: "AboutViewMain",
  components: { ContainerView, MainTitle, AboutArticles, AboutCards },
};
</script>
