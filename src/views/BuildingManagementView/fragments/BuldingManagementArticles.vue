<template>
  <div class="flex flex-col gap-12">
    <ArticleContent title="Locação de Imóveis">
      <p>
        Gerenciar a locação de imóveis é uma tarefa que exige cuidado e atenção.
        Na Trimboli, somos responsáveis por todo o processo, desde a prospecção
        e análise de potenciais inquilinos até a negociação de contratos e o
        acompanhamento de pagamentos. Nosso objetivo é garantir que as
        propriedades dos nossos clientes sejam sempre ocupadas por inquilinos de
        qualidade, minimizando vacâncias e maximizando a rentabilidade.
      </p>
    </ArticleContent>
    <ArticleContent title="Administração de Propriedades">
      <p>
        A Trimboli oferece serviços abrangentes de administração imobiliária,
        que incluem a gestão de manutenção, o pagamento de taxas, e a realização
        de serviços de contabilidade detalhados. Cuidamos de todos os aspectos
        operacionais, assegurando que os imóveis estejam sempre em excelentes
        condições e que todas as obrigações legais e financeiras sejam
        cumpridas.
      </p>
    </ArticleContent>
    <ArticleContent title="Consultoria Imobiliária">
      <p>
        Para investidores e proprietários que buscam otimizar seus ativos
        imobiliários, oferecemos serviços de consultoria estratégica. Nossos
        especialistas em gestão imobiliária fornecem insights valiosos sobre o
        mercado, ajudando a maximizar o retorno sobre o investimento e a tomar
        decisões informadas e estratégicas.
      </p>
    </ArticleContent>
    <ArticleContent title="Tecnologia e inovação">
      <p class="mb-4">
        Utilizamos as mais recentes tecnologias para otimizar nossos serviços e
        oferecer aos nossos clientes uma experiência moderna e eficiente. A
        plataforma Accordous é exemplo de como integramos inovação em nossa
        operação, permitindo uma gestão eficiente e segura. Com essas
        ferramentas, garantimos que nossos clientes tenham acesso às melhores
        soluções tecnológicas do mercado.
      </p>

      <CardBox
        class="text-justify"
        :image="{
          source: require('@/assets/img/accordous.png'),
          fit: 'contain',
          alt: 'Accordous logo',
          color: 'white',
        }"
        title="Accordous"
      >
        <p>
          O <strong>Accordous</strong> é uma plataforma intuitiva que simplifica
          o acesso à 2ª via de faturas e boletos, garantindo que nossos clientes
          possam gerenciar suas necessidades financeiras com agilidade e
          segurança. Com uma interface prática e eficiente, o Accordous oferece
          uma experiência fluida, colocando o controle financeiro ao alcance de
          suas mãos.
        </p>

        <div class="flex mt-9">
          <DropdownButton class="ml-auto">
            <template slot="button">
              <a
                href="https://accordous.digital/segunda-via-faturas"
                target="_blank"
                >acessar</a
              >
            </template>
            <template slot="menu">
              <DropdownOption>
                <a
                  href="https://accordous.digital/segunda-via-faturas"
                  target="_blank"
                  >cliente</a
                >
              </DropdownOption>
              <DropdownOption>
                <a href="https://accordous.digital/login" target="_blank"
                  >administrador</a
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
  name: "BuldingManagementArticles",
  components: { ArticleContent, CardBox, DropdownButton, DropdownOption },
};
</script>
