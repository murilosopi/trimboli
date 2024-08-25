<template>
  <section>
    <BannerContainer
      :image="require('@/assets/img/building-darken.png')"
      class="mb-14"
    >
      <MainTitle class="mb-10">
        <i class="fa-solid fa-gears"></i>
        Gestão Imobiliária
      </MainTitle>
      <p class="mb-3">
        A Trimboli também oferece serviços completos de gestão imobiliária,
        focados em locação e administração de imóveis. Nossa equipe garante que
        cada propriedade seja administrada com máxima eficiência, desde a
        seleção de inquilinos até a manutenção e a gestão financeira.
      </p>
      <MainButton>torne-se nosso cliente</MainButton>
    </BannerContainer>

    <ContainerView>
      <BuldingManagementArticles />
    </ContainerView>
  </section>
</template>

<script>
import BannerContainer from "@/components/common/BannerContainer.vue";
import MainTitle from "@/components/common/MainTitle.vue";
import ContainerView from "@/components/layout/ContainerView.vue";
import BuldingManagementArticles from "./fragments/BuldingManagementArticles.vue";
import MainButton from "@/components/common/MainButton.vue";
export default {
  name: "BuldingManagementViewMain",
  components: {
    BannerContainer,
    MainTitle,
    BuldingManagementArticles,
    ContainerView,
    MainButton,
  },
};
</script>
