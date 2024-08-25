<template>
  <div
    class="py-20 min-h-[60vh] flex justify-center items-center bg-no-repeat bg-cover bg-bottom"
    :style="{
      backgroundImage: `url(${image})`,
    }"
  >
    <ContainerView class="">
      <slot></slot>
    </ContainerView>
  </div>
</template>

<script>
import ContainerView from "../layout/ContainerView.vue";

export default {
  name: "BannerContainer",
  props: ["image"],
  components: {
    ContainerView,
  },
};
</script>
