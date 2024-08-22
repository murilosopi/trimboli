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
import AboutArticles from "@/views/AboutView/fragments/AboutArticles.vue";
import MainTitle from "@/components/common/MainTitle.vue";
import missionImage from "@/assets/img/compass.png";
import visionImage from "@/assets/img/buildings.png";
import valueImage from "@/assets/img/holding-hand.png";

export default {
  name: "AboutView",
  components: { MainTitle, AboutArticles },
  data() {
    return {
      images: {
        mission: {
          source: missionImage,
          alt: "auau",
        },
        vision: {
          source: visionImage,
          alt: "auau",
        },
        values: {
          source: valueImage,
          alt: "auau",
        },
      },
    };
  },
};
</script>
