<template>
  <article :class="alignment">
    <div
      :class="alignment == 'right' ? ['flex-row-reverse', 'ml-auto'] : []"
      class="flex mb-3 relative w-fit"
    >
      <MainTitle
        :tag="'h2'"
        class="mb-1"
        :class="`m${alignment.charAt(0)}-4`"
        >{{ title }}</MainTitle
      >
      <div class="h-1 w-full bg-primary absolute bottom-0 growWidth"></div>
      <div class="w-1 bg-primary absolute bottom-0 growHeight"></div>
    </div>
    <div :class="['text-lg', `text-${alignment}`]">
      <slot name="content"></slot>
    </div>
  </article>
</template>

<script>
import MainTitle from "./MainTitle.vue";

export default {
  name: "ArticleContent",
  props: {
    title: String,
    alignment: {
      type: String,
      default: "left",
      validator(value) {
        return ["left", "right"].includes(value);
      },
    },
  },
  components: { MainTitle },
};
</script>
<style scoped>
.growWidth {
  animation: growWidth 1s 0.5s forwards;
}

.growHeight {
  animation: growHeight 0.5s 1s forwards;
}

.growHeight,
.growWidth {
  animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}

@keyframes growWidth {
  from {
    @apply w-full;
  }

  to {
    @apply w-0;
  }
}

@keyframes growHeight {
  from {
    @apply h-0;
  }

  to {
    @apply h-full;
  }
}
</style>
