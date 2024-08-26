<template>
  <ContainerView>
    <section>
      <MainTitle :tag="'h1'" class="text-center mb-12">
        <i class="fa-solid fa-phone"></i>
        Contato
      </MainTitle>
      <p>
        Estamos prontos para ouvir você! Utilize o formulário abaixo para entrar
        em contato com a <strong>Trimboli</strong>. Preencha seus dados e
        selecione o assunto de sua mensagem. Se preferir, escolha "Outro" e
        personalize o tema de sua consulta. Nossa equipe responderá o mais
        rápido possível.
      </p>
      <p>
        Caso prefira, você também pode nos contatar diretamente pelo e-mail
        <AnchorLink href="mailto:contato@trimboli.com.br"
          >contato@trimboli.com.br</AnchorLink
        >
        ou pelo telefone
        <AnchorLink href="tel:(11) 5128-9560">(11) 5128-9560</AnchorLink>.
      </p>
      <ContactForm class="mt-8" />
    </section>
  </ContainerView>
</template>

<script>
import ContainerView from "@/components/layout/ContainerView.vue";
import MainTitle from "@/components/common/MainTitle.vue";
import AnchorLink from "@/components/common/AnchorLink.vue";
import ContactForm from "./fragments/ContactForm.vue";

export default {
  name: "ContactViewMain",
  components: { ContainerView, MainTitle, AnchorLink, ContactForm },
};
</script>
