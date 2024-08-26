<template>
  <ContainerView>
    <section>
      <MainTitle :tag="'h1'" class="text-center mb-12">
        <i class="fa-solid fa-phone"></i>
        Contato
      </MainTitle>
      <p>
        Antes de entrar em contato, recomendamos que você visite nossa seção de
        <AnchorLink href="/faq" :router="true"
          >Perguntas Frequentes (FAQ)</AnchorLink
        >, onde você poderá encontrar respostas para as dúvidas mais comuns.
      </p>
      <p>
        Se precisar de assistência adicional, por favor, utilize o formulário
        abaixo para nos enviar sua mensagem. Nossa equipe está pronta para
        ajudá-lo e responderá o mais breve possível.
      </p>
      <p>
        Caso prefira, você também pode nos contatar diretamente pelo e-mail
        <AnchorLink href="mailto:contato@trimboli.com.br"
          >contato@trimboli.com.br</AnchorLink
        >
        ou pelo telefone
        <AnchorLink href="tel:(11) 5128-9560">(11) 5128-9560</AnchorLink>.
      </p>
    </section>
  </ContainerView>
</template>

<script>
import ContainerView from "@/components/layout/ContainerView.vue";
import MainTitle from "@/components/common/MainTitle.vue";
import AnchorLink from "@/components/common/AnchorLink.vue";

export default {
  name: "ContactViewMain",
  components: { ContainerView, MainTitle, AnchorLink },
};
</script>
