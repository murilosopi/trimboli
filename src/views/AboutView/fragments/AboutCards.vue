<template>
  <div>
    <CardBox :img="images.mission" title="Missão">
      <p>
        Proporcionar soluções inovadoras e confiáveis em securitização, locação
        e administração de imóveis, comprometendo-nos com a excelência e a
        transparência em cada etapa, para garantir a segurança e a satisfação
        dos nossos clientes.
      </p>
    </CardBox>

    <CardBox :img="images.vision" title="Visão">
      <p>
        Ser reconhecida como a empresa líder no mercado de securitização e
        gestão imobiliária, estabelecendo novos padrões de qualidade e
        eficiência, e contribuindo para o crescimento sustentável dos nossos
        clientes e parceiros.
      </p>
    </CardBox>

    <CardBox :img="images.values" title="Valores">
      <dl class="grid grid-cols-2 gap-10 text-center">
        <div>
          <MainTitle tag="dt" class="text-xl">
            <i class="fa-solid fa-eye mr-1"></i>
            Transparência
          </MainTitle>
          <dd>
            Conduzimos todas as nossas operações com clareza e honestidade,
            garantindo que nossos clientes estejam sempre bem informados e
            confiantes em suas decisões.
          </dd>
        </div>

        <div>
          <MainTitle tag="dt" class="text-xl">
            <i class="fa-solid fa-trophy mr-1"></i>
            Excelência
          </MainTitle>
          <dd>
            Buscamos continuamente o aprimoramento de nossos serviços, visando
            superar as expectativas e entregar resultados excepcionais.
          </dd>
        </div>

        <div>
          <MainTitle tag="dt" class="text-xl">
            <i class="fa-solid fa-lightbulb mr-1"></i>
            Inovação
          </MainTitle>
          <dd>
            Valorizamos a adaptação e a evolução constante, incorporando as mais
            recentes tecnologias e práticas para oferecer soluções modernas e
            eficazes.
          </dd>
        </div>

        <div>
          <MainTitle tag="dt" class="text-xl">
            <i class="fa-solid fa-handshake mr-1"></i>
            Responsabilidade
          </MainTitle>
          <dd>
            Assumimos um compromisso com a ética, o respeito às leis e a
            sustentabilidade, atuando de maneira responsável em todas as nossas
            atividades.
          </dd>
        </div>
      </dl>
    </CardBox>
  </div>
</template>

<script>
import CardBox from "@/components/common/CardBox.vue";

export default {
  name: "AboutCards",
  components: { CardBox },
};
</script>
