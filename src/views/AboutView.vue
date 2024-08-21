<template>
  <section class="home">
    <MainTitle :tag="'h1'" class="text-center">
      <i class="fas fa-users"></i>
      Quem somos
    </MainTitle>

    <AboutArticles />
  </section>
</template>

<script>
import AboutArticles from "@/components/layout/AboutArticles.vue";
import MainTitle from "@/components/common/MainTitle.vue";

export default {
  name: "AboutView",
  components: { MainTitle, AboutArticles },
};
</script>
