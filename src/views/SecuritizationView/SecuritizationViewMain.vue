<template>
  <section>
    <BannerContainer
      :image="require('@/assets/img/meet-darken.png')"
      class="mb-14"
    >
      <MainTitle :tag="'h1'" class="mb-10">
        <i class="fa-solid fa-gears"></i>
        Securitização
      </MainTitle>
      <p class="mb-3">
        A Trimboli oferece serviços especializados em securitização, permitindo
        que empresas transformem seus ativos em títulos negociáveis, otimizando
        a liquidez e garantindo maior segurança financeira. Nossa abordagem
        combina expertise técnica e uma compreensão profunda das necessidades de
        nossos clientes.
      </p>
      <MainButton @click.native="becomeSecuritizationCostumer"
        >torne-se nosso cliente</MainButton
      >
    </BannerContainer>

    <ContainerView>
      <SecurizationArticles />
    </ContainerView>
  </section>
</template>

<script>
import BannerContainer from "@/components/common/BannerContainer.vue";
import MainTitle from "@/components/common/MainTitle.vue";
import ContainerView from "@/components/layout/ContainerView.vue";
import SecurizationArticles from "./fragments/SecurizationArticles.vue";
import MainButton from "@/components/common/MainButton.vue";
import ContactMixin from "@/mixins/ContactMixin";
export default {
  mixins: [ContactMixin],
  name: "SecurizationViewMain",
  components: {
    BannerContainer,
    MainTitle,
    SecurizationArticles,
    ContainerView,
    MainButton,
  },
};
</script>
