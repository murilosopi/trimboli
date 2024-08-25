<template>
  <article class="bg-gray rounded-sm">
    <div>
      <img
        v-if="image"
        :src="image.source"
        :alt="image.alt"
        class="w-full h-56"
        :style="{
          objectFit: image.fit,
          backgroundColor: image.color || 'transparent',
        }"
      />
    </div>
    <div class="p-7">
      <MainTitle
        tag="h3"
        class="text-3xl border-b-4 border-primary mx-auto w-fit mb-6"
        >{{ title }}</MainTitle
      >
      <div class="text-lg">
        <slot></slot>
      </div>
    </div>
  </article>
</template>

<script>
import MainTitle from "./MainTitle.vue";

export default {
  name: "CardBox",
  props: {
    image: {
      type: Object,
      validator({ source, alt, fit = "cover" }) {
        return (
          [source, alt].every((v) => v) && ["cover", "contain"].includes(fit)
        );
      },
    },
    title: String,
  },
  components: { MainTitle },
};
</script>
