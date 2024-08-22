<template>
  <article class="bg-gray rounded-sm">
    <div>
      <img
        v-if="img"
        :src="img.source"
        :alt="img.alt"
        class="w-full h-56 object-cover"
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
    img: {
      type: Object,
      validator({ source, alt }) {
        return [source, alt].every((v) => v);
      },
    },
    title: String,
  },
  components: { MainTitle },
};
</script>
