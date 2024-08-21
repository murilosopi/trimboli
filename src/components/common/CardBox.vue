<template>
  <article class="bg-gray">
    <div>
      <img v-if="img" :src="img" alt="" />
    </div>
    <div class="p-7">
      <MainTitle
        tag="h3"
        class="text-3xl border-b-4 border-primary mx-auto w-fit mb-4"
        >{{ title }}</MainTitle
      >
      <slot name="content"></slot>
    </div>
  </article>
</template>

<script>
import MainTitle from "./MainTitle.vue";

export default {
  name: "CardBox",
  props: {
    img: String,
    title: String,
  },
  components: { MainTitle },
};
</script>
