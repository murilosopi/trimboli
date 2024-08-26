<template>
  <form>
    <TransitionGroup
      name="fade"
      class="grid grid-cols-1 sm:grid-cols-2 gap-5"
      mode="out-in"
    >
      <InputField key="name" label="Nome" type="text" v-model="name" />
      <InputField key="tel" label="Telefone" type="tel" v-model="tel" />
      <InputField key="email" label="E-mail" type="email" v-model="email" />
      <InputField key="subject" label="Assunto" type="select" v-model="subject">
        <option value="">Selecione</option>
        <option value="costumer">Quero me tornar cliente</option>
        <option value="support">Suporte</option>
        <option value="other">Outro</option>
      </InputField>

      <InputField
        key="service"
        class="sm:col-span-2"
        label="Produto / Serviço"
        type="select"
        v-model="service"
        v-if="subject == 'costumer'"
      >
        <option value="building-management">Gestão Imobiliária</option>
        <option value="securitization">Securitização</option>
      </InputField>
      <InputField
        key="subject-specification"
        class="sm:col-span-2"
        label="Especifíque"
        type="text"
        v-model="customSubject"
        v-if="subject == 'other'"
      />
      <InputField
        key="message"
        class="sm:col-span-2"
        label="Mensagem"
        type="textarea"
        v-model="message"
      />
    </TransitionGroup>

    <div class="flex justify-between mt-2">
      <MainButton variant="light" @click.native="reset">limpar</MainButton>
      <MainButton @click="send">enviar</MainButton>
    </div>
  </form>
</template>

<script>
import InputField from "@/components/common/InputField.vue";
import MainButton from "@/components/common/MainButton.vue";

import "@/styles/transitions/fade.css";

export default {
  name: "ContactForm",
  components: {
    InputField,
    MainButton,
  },
  data() {
    return {
      name: "",
      tel: "",
      email: "",
      subject: "",
      customSubject: "",
      service: "",
      message: "",
    };
  },
  watch: {
    subject() {
      this.customSubject = "";
      this.service = "";
    },
  },
  methods: {
    reset() {
      for (let name in this.fields) {
        this.fields[name] = "";
      }
    },
    send() {
      // to do
      alert("Sucesso!");
      this.reset();
    },
  },
};
</script>
