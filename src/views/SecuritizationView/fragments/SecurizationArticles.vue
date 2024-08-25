<template>
  <div class="flex flex-col gap-12">
    <ArticleContent title="Estruturação de Títulos">
      <p>
        Na Trimboli, desenvolvemos e emitimos títulos que atendem às
        regulamentações financeiras e são adequados ao perfil de risco de nossos
        clientes. Nosso time de especialistas assegura que cada título seja
        estruturado de forma a proporcionar a maior liquidez possível, sem
        comprometer a segurança dos ativos.
      </p>
    </ArticleContent>
    <ArticleContent title="Gestão de Riscos">
      <p>
        Na Trimboli, desenvolvemos e emitimos títulos que atendem às
        regulamentações financeiras e são adequados ao perfil de risco de nossos
        clientes. Nosso time de especialistas assegura que cada título seja
        estruturado de forma a proporcionar a maior liquidez possível, sem
        comprometer a segurança dos ativos.
      </p>
    </ArticleContent>
    <ArticleContent title="Consultoria Especializada">
      <p>
        Oferecemos consultoria personalizada para empresas que desejam ingressar
        ou expandir suas operações no mercado de securitização. Nossos
        consultores são experientes e têm um conhecimento profundo das melhores
        práticas e das tendências do mercado, ajudando nossos clientes a tomar
        decisões informadas e estratégicas.
      </p>
    </ArticleContent>
    <ArticleContent title="Tecnologia e inovação">
      <p class="mb-4">
        Utilizamos as mais recentes tecnologias para otimizar nossos serviços e
        oferecer aos nossos clientes uma experiência moderna e eficiente. A
        plataforma SmartFactor é exemplo de como integramos inovação em nossa
        operação, permitindo uma gestão eficiente e segura. Com essas
        ferramentas, garantimos que nossos clientes tenham acesso às melhores
        soluções tecnológicas do mercado.
      </p>

      <CardBox
        class="text-justify"
        :image="{
          source: require('@/assets/img/smartfactor.png'),
          fit: 'contain',
          alt: 'SmartFactor logo',
        }"
        title="SmartFactor"
      >
        <p>
          O <strong>SmartFactor</strong> é a nossa plataforma dedicada à gestão
          de operações de securitização. Com uma interface intuitiva e recursos
          robustos, o sistema permite que você acompanhe todas as etapas do
          processo de forma segura e eficiente. Garanta a transparência e o
          controle necessário para otimizar seus ativos.
        </p>

        <div class="flex mt-9">
          <DropdownButton class="ml-auto">
            <template slot="button">
              <a href="https://www.smartfactor.com.br/trimboli/" target="_blank"
                >acessar</a
              >
            </template>
            <template slot="menu">
              <DropdownOption>
                <a
                  href="https://www.smartfactor.com.br/trimboli/"
                  target="_blank"
                  >cliente</a
                >
              </DropdownOption>
              <DropdownOption>
                <a href="https://www.smartfactor.com.br/smart/" target="_blank"
                  >admnistrador</a
                >
              </DropdownOption>
            </template>
          </DropdownButton>
        </div>
      </CardBox>
    </ArticleContent>
  </div>
</template>

<script>
import ArticleContent from "@/components/common/ArticleContent.vue";
import CardBox from "@/components/common/CardBox.vue";
import DropdownButton from "@/components/common/DropdownButton.vue";
import DropdownOption from "@/components/common/DropdownOption.vue";

export default {
  name: "SecurizationArticles",
  components: { ArticleContent, CardBox, DropdownButton, DropdownOption },
};
</script>
