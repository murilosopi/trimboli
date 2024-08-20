<template>
  <article class="home">
    <MainTitle :tag="'h1'" class="text-center">
      <i class="fas fa-users"></i>
      Quem somos
    </MainTitle>
  </article>
</template>

<script>
import MainTitle from "@/components/MainTitle.vue";

export default {
  name: "AboutView",
  components: { MainTitle },
};
</script>
